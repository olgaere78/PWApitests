import { test as base, Page } from '@playwright/test';
import { RequestHandler } from '../api/request-handler';
import { AuthService } from '../api/auth-service';
import { env } from '../config/env';

type Fixtures = {
  requestHandler: RequestHandler;
  authRequestHandler: RequestHandler;
  authPage: Page;
  authData: {
    token: string;
  };
};

export const test = base.extend<Fixtures>({
  requestHandler: async ({ request }, use) => {
    await use(new RequestHandler(request));
  },  

  authData: async ({ request }, use) => {

    const authService = new AuthService(request);

    const authData = await authService.signIn(env.defaultEmail);

    await use(authData);
  },

 authRequestHandler: async ({ request, authData }, use) => {
    await use(
      new RequestHandler(
        request,
        `Bearer ${authData.token}`
      )
    );
  },

  authPage: async ({ browser, authData }, use) => {
    const context = await browser.newContext();
    await context.addCookies([
      {
        name: 'access_token',
        value: authData.token,
        domain: 'example.com',
        path: '/',
      },
    ]);
    // Alternatively, you can use localStorage if the application relies on it for storing tokens
    // await context.addInitScript((token) => {
    //   window.localStorage.setItem('token', token);
    // }, authData.token);

    const page = await context.newPage();

    await use(page);

    await context.close();
  },
});

export { expect } from '@playwright/test';
