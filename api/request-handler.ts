import { APIRequestContext } from "playwright/test"

export class RequestHandler {
    private readonly request: APIRequestContext;
    private readonly token: string = ''

    constructor(request: APIRequestContext,
        token?: string
    ) {
        this.request = request;
        this.token = token ?? ''
    }

    private getHeaders(
        headers?: Record<string, string>
    ) {
        const result: Record<string, string> = headers || {};

        if (this.token) {
            result.Authorization = this.token;
        }

        return result;
    } 

    

    async get(url: string, options: { headers?: Record<string, string>, params?: Record<string, string> }) {
        const response = await this.request.get(url, {
            headers: this.getHeaders(options?.headers),
            params: options?.params
        });

        console.log(`Status code ${response.status}`)
        return response;
    }

    async post(url: string, options: { headers?: Record<string, string>, body: Object }) {
        return await this.request.post(url, 
            {
                headers: this.getHeaders(options?.headers),
                data: options?.body
            });
    }

    async put(url: string, options: { headers?: Record<string, string>, body: Object }) {
        return await this.request.put(url,
            {
                headers: this.getHeaders(options?.headers),
                data: options?.body
            })

    }

    async delete(url: string, options?: { headers?: Record<string, string>, body: Object }) {
        return await this.request.delete(url, {
            headers: this.getHeaders(options?.headers),
            data: options?.body
        }
        )
    };
}