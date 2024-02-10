import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { AuthResponse } from '../../interfaces/auth';
import { DtoAuthResponse } from './dtos';
import { Mapper } from './mapper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthResponse> {
    return of({ token: 'asdjfalksdjflkajsdf' });

    // return this.http.post<DtoAuthResponse>('/api/login', { username, password })
    //   .pipe(map((dto: DtoAuthResponse) => Mapper.dtoAuthResponseToAuthResponse(dto)));
  }
}
