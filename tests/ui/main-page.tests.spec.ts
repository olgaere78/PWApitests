import {test} from '../../fixtures/app-fixture';
import { env } from '../../config/env';

test.describe('Main page', ()=> {  
    test('Main page should be opened successfully', async({app})=>{
        await app.mainPage.goto();
        console.log('go to https://www.w3schools.com/')
        await app.mainPage.assertUrlIs(env.baseUrl);
        await app.mainPage.assertNavBarIsVisible();
        await app.mainPage.assertNavBarButtonsAreVisible();
    });
})