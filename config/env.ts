function getEnv(name: string) {
    const value = process.env[name];

    if (!value) {
        throw new Error(`${name} is not defined`);
    }
    return value;
}
export const env = {
    baseUrl: getEnv('BASE_URL'),
    apiUrl: getEnv('API_URL'),
    apiKey: getEnv('X_API_KEY'),
    defaultEmail: getEnv('DEFAULT_EMAIL'),
    defaultPassword: getEnv('DEFAULT_PASSWORD'),
}