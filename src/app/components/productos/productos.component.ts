import { Component } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
    arreglo:string[] =[
        "frecuencia: 5.60 GHz",
        "Nucleos:24",
        "Subprocesos:32",
        "$2'299.000",
    ]

}
