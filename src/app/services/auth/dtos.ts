export interface DtoAuthResponse {
    token: string;
    user: DtoUser;
}

export interface DtoUser{
    nombre: string;
    apellidos: string;
    direccion: string;
    email: string;
    contraseña: string;
}