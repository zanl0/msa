import { Component } from '@angular/core';
import { Product } from '../../models/productos';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { ComponentesService } from '../../services/componentes/componentes.service';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito/carrito.service';
import { Carrito } from '../../models/carrito';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-productos',
    standalone: true,
    imports: [CarruselComponent],
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.scss',
})
export class ProductosComponent {
    productos: Product[] = [];
    currentProduct: Carrito | undefined;
    cartId: string | undefined = '';

    constructor(
        private _apiComponentes: ComponentesService,
        private _apiCarrito: CarritoService,
        protected router: Router,
    ) {}

    ngOnInit() {
        this.getProductos();
    }

    getProductos() {
        this._apiComponentes.getComponents().subscribe((data: any) => {
            this.productos = data;
        });
    }

    setCartId(id?: string) {

        Swal.fire({
            title: '¿Agregar?',
            text: '¿Desea agregar este producto a su carrito?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'var(--primary)',
            cancelButtonColor: '#b33',
            confirmButtonText: 'Añadir',
        }).then((result) => {
            if (result.isConfirmed) {
                this._apiComponentes.getComponentById(id).subscribe((data:any)=>{
                    Swal.fire({
                        title: '¡Agregado!',
                        text: `El producto ha sido agregado satisfactoriamente a su carrito`,
                        icon: 'success',
                        timer: 2500,
                        showConfirmButton: false,
                    });
                    this.cartId = id;
                    this.getProductInfo(id);
                })

            }
        })


    }




    getProductInfo(idProduct?: string) {
        this._apiComponentes
            .getComponentById(idProduct)
            .subscribe((data: any) => {
                const { producto, marca, precio, imagen } = data;
                const elproducto: Carrito = {
                    producto,
                    marca,
                    precio,
                    imagen,
                    cantidad: 1,
                };
                this.currentProduct = elproducto;
                console.log(this.currentProduct);

                this._apiCarrito.addToCart(this.currentProduct).subscribe((data: any) => {
                    console.log(data);
                });
            });
    }


}
