import { RequestHandler } from './request-handler'
import { buildUrl } from '../utils/request-utils'
import { env } from '../config/env';

export class ApiService {
    constructor(private requestHandler: RequestHandler) {
    }

    private authHeader = { 'x-api-key': env.apiKey }

    async getProject(projectId: string, options?: { headers?: Record<string, string> }) {
        const url = buildUrl('collections/products/records');
        const headers = options?.headers ?? this.authHeader;
        const response = await this.requestHandler.get(url,
            {
                headers: headers,
                params: { 'project_id': projectId }
            })
        return response
    }
} 