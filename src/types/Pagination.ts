export interface Image {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
    liked: boolean;
    alt: string;
}


export interface ImagesResponse {
    next_page: string;
    page: number;
    per_page: number;
    photos: Image[];
    total_results: number;
}

export type PaginationData = Omit<ImagesResponse, 'photos' | 'next_page'>