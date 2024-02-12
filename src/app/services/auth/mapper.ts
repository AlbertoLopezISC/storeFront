import { AuthResponse } from "../../interfaces/auth";
import { DtoAuthResponse } from "./dtos";

export class Mapper{
    static dtoAuthResponseToAuthResponse(dtoAuthResponse: DtoAuthResponse): AuthResponse{
        return {
            token: dtoAuthResponse.token,
            user: {
                nombre: dtoAuthResponse.user.nombre,
                apellidos: dtoAuthResponse.user.apellidos,
                direccion: dtoAuthResponse.user.direccion,
                email: dtoAuthResponse.user.email,
                contraseña: dtoAuthResponse.user.contraseña
            }
        }
    }
}