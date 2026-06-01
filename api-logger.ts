export class APILogger {
    private recentLog: any[] = [];

    logRequest(method: string, url: string, headers?: Record<string, string>, data?: any) {
        const logEntry = {
            method,
            url,
            headers,
            data
        };
        this.recentLog.push({type: 'Request Details', data: logEntry});
        console.log(`Request: ${method} ${url}`);     
    }

    logResponse(status: number, body?: any) {
        const logEntry = {
            status,
            body
        };
    }

    getRecentLogs() {
        const logs = this.recentLog.map(entry => {
            return `=== ${entry.type} ===\n${JSON.stringify(entry.data, null, 4)}`;
        }).join('\n\n');
        return logs;
    }
}   