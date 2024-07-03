import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductosAdminComponent } from './components/admin/productos-admin/productos-admin.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    { path: '', component: ProductosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: ProductosAdminComponent },
];
