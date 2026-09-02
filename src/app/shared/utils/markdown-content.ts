import { marked } from 'marked';
import mermaid from 'mermaid';

let mermaidInitialized = false;

export async function renderMarkdownWithCopyButtons(markdown: string): Promise<string> {
    // marked turns the raw .md file into regular HTML.
    // After that, we do app-specific enhancements:
    // 1. Render Mermaid diagram code blocks into SVG diagrams.
    // 2. Add copy buttons to terminal command blocks.
    const html = await Promise.resolve(marked.parse(markdown));
    const htmlWithMermaid = await renderMermaidDiagrams(html);
    return addCodeCopyButtons(htmlWithMermaid);
}

async function renderMermaidDiagrams(html: string): Promise<string> {
    initializeMermaid();

    // Use a <template> as a temporary DOM container so we can replace only
    // markdown code blocks that were explicitly fenced as ```mermaid.
    const template = document.createElement('template');
    template.innerHTML = html;

    const mermaidCodeBlocks = Array.from(template.content.querySelectorAll('pre > code.language-mermaid'));

    for (const [index, codeElement] of mermaidCodeBlocks.entries()) {
        const preElement = codeElement.parentElement;
        const diagramDefinition = codeElement.textContent?.trim();

        if (!preElement || !diagramDefinition) {
            continue;
        }

        try {
            const diagramId = `markdown-mermaid-${Date.now()}-${index}`;
            const { svg } = await mermaid.render(diagramId, diagramDefinition);
            const diagramWrapper = document.createElement('div');
            diagramWrapper.className = 'markdown-mermaid';
            diagramWrapper.innerHTML = svg;
            preElement.replaceWith(diagramWrapper);
        } catch (error) {
            // Keep the original Mermaid source visible if rendering fails.
            // A broken diagram as readable text is more useful than a blank modal.
            preElement.classList.add('markdown-mermaid-error');
            preElement.insertAdjacentHTML('beforebegin', '<p class="markdown-mermaid-error-message">Mermaid diagram could not be rendered.</p>');
            console.error('Failed to render Mermaid diagram from markdown.', error);
        }
    }

    return template.innerHTML;
}

function initializeMermaid(): void {
    if (mermaidInitialized) {
        return;
    }

    mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: 'default'
    });
    mermaidInitialized = true;
}

export function addCodeCopyButtons(html: string): string {
    // Use a <template> as a safe temporary DOM container. This lets us inspect and rearrange
    // the generated HTML with normal DOM APIs before handing it back to Angular for display.
    const template = document.createElement('template');
    template.innerHTML = html;

    // Markdown fenced blocks render as <pre><code class="language-shell">...</code></pre>.
    // We only add copy buttons to command-like blocks, not explanatory text/json/plain blocks.
    template.content.querySelectorAll('pre > code').forEach((codeElement) => {
        const preElement = codeElement.parentElement;

        if (!preElement || !isCopyableCommandBlock(codeElement)) {
            return;
        }

        // Wrap the original <pre> so the copy button can be positioned over the code block
        // without changing the actual command text that gets copied.
        const wrapper = document.createElement('div');
        wrapper.className = 'markdown-code-block';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'markdown-code-copy';
        button.setAttribute('data-copy-code', '');
        button.setAttribute('aria-label', 'Copy code');
        button.title = 'Copy code';
        button.innerHTML = '<i class="pi pi-copy" aria-hidden="true"></i><span>Copy</span>';

        preElement.replaceWith(wrapper);
        wrapper.append(button, preElement);
    });

    return template.innerHTML;
}

function isCopyableCommandBlock(codeElement: Element): boolean {
    // marked stores the fence language as a class, for example "language-shell".
    // Restrict copy buttons to languages that usually mean "paste this in a terminal".
    const copyableLanguages = new Set(['bash', 'shell', 'sh', 'zsh', 'console', 'terminal']);
    const languageClass = Array.from(codeElement.classList).find((className) => className.startsWith('language-'));
    const language = languageClass?.replace('language-', '').toLowerCase();

    return !!language && copyableLanguages.has(language);
}

export async function copyMarkdownCodeBlock(event: Event): Promise<boolean> {
    // The copy buttons are injected through [innerHTML], so Angular does not attach a direct
    // (click) handler to each button. Instead, the parent markdown container catches clicks
    // and this function checks whether the click came from one of our injected buttons.
    const target = event.target instanceof Element ? event.target : null;
    const button = target?.closest('[data-copy-code]');

    if (!(button instanceof HTMLButtonElement)) {
        return false;
    }

    const codeText = button.closest('.markdown-code-block')?.querySelector('pre code')?.textContent ?? '';

    if (!codeText) {
        return true;
    }

    // textContent copies exactly what is inside the code block, without the button label.
    await navigator.clipboard.writeText(codeText);
    showCopiedState(button);
    return true;
}

function showCopiedState(button: HTMLButtonElement): void {
    // Give immediate feedback so the click does not feel silent.
    const label = button.querySelector('span');
    const originalLabel = label?.textContent ?? 'Copy';

    button.classList.add('copied');

    if (label) {
        label.textContent = 'Copied';
    }

    window.setTimeout(() => {
        button.classList.remove('copied');

        if (label) {
            label.textContent = originalLabel;
        }
    }, 1500);
}
