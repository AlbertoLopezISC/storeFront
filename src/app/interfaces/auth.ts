export interface AuthResponse {
    token: string;
    user: User;
}

export interface User{
    nombre: string;
    apellidos: string;
    direccion: string;
    email: string;
    contraseña: string;
}


export interface AuthValidateTokenResponse {
    validToken: boolean;
}