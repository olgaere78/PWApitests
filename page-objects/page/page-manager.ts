import { Page } from '@playwright/test';
import { MainPage } from '../page/mainPage';

export class App {
  readonly mainPage: MainPage;

  constructor(page: Page) {
    this.mainPage = new MainPage(page);
  }
}