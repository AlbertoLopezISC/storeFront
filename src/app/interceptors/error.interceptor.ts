import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { AlertComponent } from '../components/alert/alert.component';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const dialog: MatDialog = inject(MatDialog);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      console.error(err);
      dialog.open(AlertComponent, {
        data: {
          icon: 'error',
          message: err.error.message || 'An error occurred',
          showButtonCancel: false,
        }
      });
      return throwError(() => err);
    })
  );
};
