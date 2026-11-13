import type {CommonResponse} from "../types/api.ts";

const API_URL:string = import.meta.env.VITE_API_URL;
const TOKEN_KEY:string = "accessToken";

export const tokenStorage = {
    get: (): null | string => localStorage.getItem(TOKEN_KEY),
    set: (token: string): void => localStorage.setItem(TOKEN_KEY, token),
    clear: (): void =>  localStorage.removeItem(TOKEN_KEY)
}

export class ApiError extends Error{
    status: number;
    errorCode: string;
    data?: unknown;

    constructor(status: number, errorCode: string, message: string, data?: unknown) {
        super(message);
        this.status = status;
        this.errorCode = errorCode;
        this.data = data;
    }
}

export async function apiRequest<T>(path: string, options: RequestInit ={}): Promise<T> {
    const headers = new Headers(options.headers);
    if (options.body) headers.set('Content-Type', 'application/json');

    const token = tokenStorage.get();
    if (token) headers.set(`Authorization`, `Bearer ${token}`);

    const response = await fetch(`${API_URL}${path}`, {...options, headers});
    const contentType = response.headers.get('content-type') ?? '';
    let body: CommonResponse<T> | null = null;
    if (contentType.includes('application/json')) {
        body = await response.json();
    }

    if (response.status === 401 && !path.startsWith('/api/auth')) {
        tokenStorage.clear();
        window.location.href = '/login';
    }

    if (!response.ok || !body || body.errorCode !== '0000') {
        throw new ApiError(
            response.status,
            body?.errorCode ?? "UNKNOWN",
            body?.message ?? "Request Failed.",
            body?.data
        )
    }

    return body.data as T;
}