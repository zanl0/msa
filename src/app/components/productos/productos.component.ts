import { Component } from '@angular/core';
import { Product } from '../../models/productos';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { ComponentesService } from '../../services/componentes/componentes.service';

@Component({
    selector: 'app-productos',
    standalone: true,
    imports: [CarruselComponent],
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.scss'
})
export class ProductosComponent {

    productos: Product[] = [ ];

    constructor(private _api:ComponentesService) {}
    ngOnInit(){
        this.getProductos();
    }
    getProductos(){
        this._api.getComponents().subscribe((data:any)=>{
            this.productos=data;
        })
    }
}
