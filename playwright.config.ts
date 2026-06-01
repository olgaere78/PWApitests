import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html'], ['list']],

  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'api',
      testMatch: 'api/**/*.spec.ts',

      use: {
        baseURL: process.env.API_BASE_URL,
      },
    },

    {
      name: 'ui-chromium',
      testMatch: 'ui/**/*.spec.ts',

      use: {
        browserName: 'chromium',
        baseURL: process.env.UI_BASE_URL,
      },
    },
  ],
});