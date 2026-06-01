export function userCredentials(email: string){
    return {email,
        password: process.env.DEFAULT_PASSWORD!,
    }
} 