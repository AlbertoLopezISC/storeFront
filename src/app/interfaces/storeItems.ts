export interface StoreItemsResponse {
    data: StoreItem[];
}

export interface StoreItem {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
}

export interface Cart {
    [id: string]: ItemCart;
}

export interface ItemCart{
    item: StoreItem;
    quantity: number;
}