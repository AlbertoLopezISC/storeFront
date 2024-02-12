import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { lastValueFrom } from 'rxjs';

export const AuthGuard: CanActivateFn = async (route, state) => {
  const router: Router = inject(Router);
  const authService = inject(AuthService);

  try {
    const response = await lastValueFrom(authService.validateToken(sessionStorage.getItem('token') ?? ''));
    if (response.validToken) {
      return true;
    } else {
      sessionStorage.removeItem('token');
      router.navigate(['/login']);
      return false;
    }
  } catch (error) {
    sessionStorage.removeItem('token');
    router.navigate(['/login']);
    return false;
  }

};
