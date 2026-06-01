import { Page, expect } from '@playwright/test';
import { MainPageLocators } from '../locators/mainPage.locators';
import { navBarButtons } from '../../data/constants/ui-test-data';
import { BasePage } from './base-page';

export class MainPage extends BasePage {
    private mainPageLocators: MainPageLocators;

    constructor(page: Page) {
        super(page);
        this.mainPageLocators = new MainPageLocators(page);
    }
    
    //#actions
    async clickOnNavBarButtonByName(buttonName: string){
        await this.mainPageLocators.getNavBarButtonByName(buttonName).click();
    }
    //#endregion
    
    //#assertion 
    async assertNavBarIsVisible() {
        await expect(this.mainPageLocators.navw3BarItem, 'Navigation bar is not visible').toBeVisible();
    }

    async assertNavBarButtonsAreVisible() {
        for (const buttonName of Object.values(navBarButtons)) {
            await expect(this.mainPageLocators.getNavBarButtonByName(buttonName), `Button "${buttonName}" is not visible`).toBeVisible();
        }
    }
    //#endregion
}