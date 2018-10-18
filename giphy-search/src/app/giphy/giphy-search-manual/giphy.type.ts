export interface Giphy {
    id: string;
    url: string;
    images: Images;
}

export interface Images {
    fixed_height_still: ViewType;
    fixed_height: ViewType;
}

export interface ViewType {
    url: string;
}
