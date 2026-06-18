import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">

        <img src="assets/brand/favicon.png" alt="Footer Logo" style="height: 1.8em; width: auto">
        Mark L for Medical Education and Research © {{ currentYear }}. All rights reserved.
    </div>`
})
export class AppFooter {
    currentYear = new Date().getFullYear();
}
