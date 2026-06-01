import { Locator, Page } from '@playwright/test';

export class MainPageLocators {
    readonly navw3BarItem: Locator;


    constructor(private page: Page) {
        this.navw3BarItem = this.page.locator('.tnb-desktop-nav.w3-bar-item');
    }

    getNavBarButtonByName = (name: string) =>
        this.page.getByRole('button', { name });
}