export interface Link {
    id?: string;
    tinyId?: string;
    createdAt?: number;
    originalURL: string;
    tinyURL: string;
    nClicks: number;
}

export interface LinkSearchParams {
    originalURL?: string;
    tinyId?: string;
}