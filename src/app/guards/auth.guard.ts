import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  if(localStorage.getItem('token') !== null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
