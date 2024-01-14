export interface Link {
    id?: string;
    tinyId?: string;
    createdAt?: number;
    originalURL: string;
    tinyURL: string;
    nClicks: number;
}

export interface LinkSearchParams {
    id?: string;
    originalURL?: string;
    tinyURL?: string;
    tinyId?: string;
}