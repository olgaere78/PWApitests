import { test as base, expect } from './auth-fixture';
import { ApiService } from '../api/api-service';

type Fixtures = {
  apiService: ApiService;
  guestApiService: ApiService;
};

export const test = base.extend<Fixtures>({
  apiService: async ({ requestHandler }, use) => {
    await use(new ApiService(requestHandler));
  },

  guestApiService: async ({ requestHandler }, use) => {
    await use(new ApiService(requestHandler));
  },

});

export { expect };