import { AuthResponse } from "../../interfaces/auth";
import { DtoAuthResponse } from "./dtos";

export class Mapper{
    static dtoAuthResponseToAuthResponse(dtoAuthResponse: DtoAuthResponse): AuthResponse{
        return {
            token: dtoAuthResponse.token
        }
    }
}