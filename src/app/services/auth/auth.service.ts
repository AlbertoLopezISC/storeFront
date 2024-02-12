import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthResponse, AuthValidateTokenResponse } from '../../interfaces/auth';
import { DtoAuthResponse } from './dtos';
import { Mapper } from './mapper';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse> {

    return this.http.post<DtoAuthResponse>(`${this.url}Auth`, { email, password })
      .pipe(map((dto: DtoAuthResponse) => Mapper.dtoAuthResponseToAuthResponse(dto)));
  }

  validateToken(token: string): Observable<AuthValidateTokenResponse> {

    return this.http.post<AuthValidateTokenResponse>(`${this.url}Auth/validate-token`, { token })
      .pipe(map((dto: AuthValidateTokenResponse) => dto));
  }
}
