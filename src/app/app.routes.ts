import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

export const routes: Routes = [
    { path: "login", component: FormComponent }, { path: "", component: CarruselComponent }
];
