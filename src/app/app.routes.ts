import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

import { ProductosComponent } from './components/admin/productos/productos.component';

export const routes: Routes = [
    { path: '', component: CarruselComponent },
    { path: 'login', component: FormComponent },
    { path: 'admin', component: ProductosComponent },

];
