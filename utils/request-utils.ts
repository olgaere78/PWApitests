export function buildUrl(path: string){
    const apiUrl = process.env.API_URL;
    return new URL(path, apiUrl).toString();
}