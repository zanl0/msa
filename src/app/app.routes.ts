import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ProductosAdminComponent } from './components/admin/productos-admin/productos-admin.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

export const routes: Routes = [
    { path: '', component: CarruselComponent },
    { path: 'login', component: FormComponent },
    { path: 'admin', component: ProductosAdminComponent },
];
