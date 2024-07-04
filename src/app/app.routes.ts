import { Routes } from '@angular/router';
import { MainAdminComponent } from './components/admin/main-admin/main-admin.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    { path: '', component: ProductosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: MainAdminComponent },
    { path: 'carrito', component: CarritoComponent },
];
