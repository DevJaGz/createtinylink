import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/create/create.component').then(c => c.CreateComponent)
    },
    {
        path: ':id',
        loadComponent: () => import('./components/redirect/redirect.component').then(c => c.RedirectComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
