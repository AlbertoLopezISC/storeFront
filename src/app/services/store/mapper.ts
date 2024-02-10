import { StoreItemsResponse } from "../../interfaces/storeItems"
import { DtosStoreItemsResponse } from "./dtos"

export class Mapper{
    static dtoStoreItemsResponseToStoreItemsResponse(dtoStoreItemsResponse: DtosStoreItemsResponse): StoreItemsResponse{
        return {
            data: dtoStoreItemsResponse.data.map((dtoStoreItem) => {
                return {
                    id: dtoStoreItem.id,
                    name: dtoStoreItem.name,
                    price: dtoStoreItem.price,
                    description: dtoStoreItem.description,
                    imageUrl: dtoStoreItem.imageUrl,
                    stock: dtoStoreItem.stock
                }
            })
        }
    }
}