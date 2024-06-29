import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ProductosAdminComponent } from './components/admin/productos-admin/productos-admin.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    { path: '', component: ProductosComponent },
    { path: 'login', component: FormComponent },
    { path: 'admin', component: ProductosAdminComponent }
];
