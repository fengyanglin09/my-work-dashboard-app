/** @type {import('tailwindcss').Config} */
module.exports = {
    // Enables Tailwind's dark: variants using this app's existing dark-mode class.
    // LayoutService toggles `app-dark` on the document element.
    darkMode: ['selector', '[class="app-dark"]'],
    content: ['./src/**/*.{html,ts,scss,css}', './index.html'],
    plugins: [],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        },
        extend: {
            // Neutral + brand palettes formerly provided by tailwindcss-primeui.
            // Kept as static values so `surface-*` / `primary-*` utilities used
            // across templates keep working after PrimeNG removal. Dark mode is
            // handled by the explicit `dark:` variants already in the templates.
            colors: {
                surface: {
                    0: '#ffffff',
                    50: '#fbfdff',
                    100: '#f2f6fa',
                    200: '#e2ebf3',
                    300: '#cbd8e5',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617'
                },
                primary: {
                    50: '#effaf5',
                    100: '#dff5ea',
                    200: '#bfe8d5',
                    300: '#8ed4b5',
                    400: '#55ba91',
                    500: '#16845f',
                    600: '#0f6f50',
                    700: '#0d5c43',
                    800: '#0f4937',
                    900: '#103d30',
                    950: '#08231b',
                    DEFAULT: '#16845f'
                }
            }
        }
    }
};
