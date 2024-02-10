import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    
    },
    {
        path: 'stores',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/store/store.module').then(m => m.StoreModule)
    }
];
