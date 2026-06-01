import { test as base } from '@playwright/test';
import { App } from '../page-objects/page/page-manager';

type Fixtures = {
  app: App;
};

export const test = base.extend<Fixtures>({
  app: async ({ page }, use) => {
    const app = new App(page);
    await use(app);
  },
});

export { expect } from '@playwright/test';