export interface StoreItemsResponse {
    count: number;
    results: StoreItem[];
}

export interface StoreItem {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imgUrl: string;
    stock: number
}

export interface CreateShoppingCartItem{
    id?: number;
    articuloId: number;
    cantidad: number;
    agregarFlag: boolean;
}

export interface ShoppingCartItem{
    id: number;
    articulo: StoreItem;
    cantidad: number;
}

export interface Cart {
    [id: string]: ItemCart;
}

export interface ItemCart{
    item: StoreItem;
    quantity: number;
}