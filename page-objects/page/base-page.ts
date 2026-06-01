import { Page, expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) { }

  goto = async (path: string = '/') => {
    await this.page.goto(path);
  };

  reload = async () => {
    await this.page.reload();
  };

  goBack = async () => {
    await this.page.goBack();
  };

  assertUrlIs = async (url: string | RegExp) => {
    await expect(this.page).toHaveURL(url);
  };

  waitForTitle = async (title: string | RegExp) => {
    await expect(this.page).toHaveTitle(title);
  };

  getCurrentUrl = () => {
    return this.page.url();
  };
}