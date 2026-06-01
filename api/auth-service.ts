import { APIRequestContext } from "@playwright/test";
import { userCredentials} from '../utils/test-data'

export class AuthService {
    constructor(private request: APIRequestContext) { }

    async signIn(testEmail: string) {
        const response = await this.request.post(`${process.env.API_URL}/user/login`,
            {
                data: userCredentials(testEmail)
            });
        const body = await response.json();
        return body.user.token;
    }
}