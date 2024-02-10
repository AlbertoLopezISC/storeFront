export interface DtosStoreItemsResponse {
    data: DtosStoreItems[];
}

export interface DtosStoreItems {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
}