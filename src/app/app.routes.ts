import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    {path:"login",component:FormComponent},
    {path:"", component:ProductosComponent}

];
