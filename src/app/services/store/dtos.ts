export interface DtoStoreItemsResponse {
    count: number;
    results: DtoStoreItem[];
}

export interface DtoStoreItem {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imgUrl: string;
    stock: number
}

export interface DtoShoppingCartItem{
    id: number;
    articulo: DtoStoreItem;
    cantidad: number;
}