import { test, expect } from '../../fixtures/apiService-fixture';
import {
  productsResponseSchema,
  type ProductsResponse,
} from '../../api/schemas';

const projectId = 19349;

test.describe('get products returns 200 and valid schema', () => {
  let parsedBody: ProductsResponse;

  test.beforeAll(async ({ apiService }) => {
    const response = await apiService.getProject(projectId.toString());
    expect(response.status()).toBe(200);
    const body = await response.json();
    parsedBody = productsResponseSchema.parse(body);
    console.log('BEFORE ALL RUN');
    console.log(parsedBody);
  });

  test('get lenght of products is more than 0 and meta total should match data length', async () => {
    expect(parsedBody.data.length).toBeGreaterThan(0);
    expect(parsedBody.meta.total).toBe(parsedBody.data.length);
    expect(parsedBody.meta.page).toBe(1);
  });

  test('all records belong to requested project', async () => {
    for (const product of parsedBody.data) {
      expect(product.project_id).toBe(19349);
    }
  })
});

test.describe('get product negative scenario', () => {
  test('should return error with invalid api key', async ({ apiService }) => {
    const response = await apiService.getProject(projectId.toString(), {
      headers: { 'x-api-key': 'wrong' }
    });
    const body = response.json();
    expect(response.status(), `Should return error status code 401 with invalid api key but got ${response.status}`).toBe(403);
  });

  test('should return error without api key', async ({ apiService }) => {
    const response = await apiService.getProject(projectId.toString(), {
      headers: { 'x-api-key': '' }
    });
    const body = response.json();
    expect(response.status(), `Should return error status code 401 with invalid api key but got ${response.status}`).toBe(401);
  });

  test('should return empty list or 404 for non-existing project', async ({ apiService }) => {
    const response = await apiService.getProject('123');
    const body = response.json();
    expect(response.status(), `Should return empty list or 404 for non-existing project but got ${response.status}`).toBe(401);
  });
});