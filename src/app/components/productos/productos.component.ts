import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
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
