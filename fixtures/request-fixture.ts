import { test as base, expect } from '@playwright/test';
import { RequestHandler } from '../api/request-handler';

type Fixtures = {
  requestHandler: RequestHandler;
};

export const test = base.extend<Fixtures>({
  requestHandler: async ({ request }, use) => {
    const api = new RequestHandler(request);

    await use(api);
  },
});

export { expect };