import { ShoppingCartItem, StoreItemsResponse } from "../../interfaces/storeItems"
import { DtoShoppingCartItem, DtoStoreItemsResponse } from "./dtos"

export class Mapper{
    static dtoStoreItemsResponseToStoreItemsResponse(dtoStoreItemsResponse: DtoStoreItemsResponse): StoreItemsResponse{
        return {
            count: dtoStoreItemsResponse.count,
            results: dtoStoreItemsResponse.results.map(dto => ({
                id: dto.id,
                nombre: dto.nombre,
                descripcion: dto.descripcion,
                precio: dto.precio,
                imgUrl: dto.imgUrl,
                stock: dto.stock
            }))
        }
    }

    static dtoShoppingCartResponseToShoppingCart(dtoShoppingCartResponse: DtoShoppingCartItem[]): ShoppingCartItem[]{
        return dtoShoppingCartResponse.map(dto => ({
            articulo: {
                id: dto.articulo.id,
                nombre: dto.articulo.nombre,
                descripcion: dto.articulo.descripcion,
                precio: dto.articulo.precio,
                imgUrl: dto.articulo.imgUrl,
                stock: dto.articulo.stock
            },
            id: dto.id,
            cantidad: dto.cantidad
        }))
    }
}