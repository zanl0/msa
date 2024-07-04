import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { Order } from '../../models/pedidos';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-carrito',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.scss',
})
export class CarritoComponent {
    private numberPattern = /^[0-9]+$/;
    private emailPattern: RegExp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    formPedido: FormGroup;
    total: number = 2597000;

    constructor(
        private formBuilder: FormBuilder,
        private _api: PedidosService,
        private router: Router,
    ) {
        this.formPedido = this.formBuilder.group({
            nombre: ['', Validators.required],
            telefono: [
                '',
                [Validators.required, Validators.pattern(this.numberPattern)],
            ],
            correo: [
                '',
                [Validators.required, Validators.pattern(this.emailPattern)],
            ],
            direccion: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.formPedido.valid) {
            const pedido: Order = {
                nombre: this.formPedido.get('nombre')?.value,
                telefono: this.formPedido.get('telefono')?.value,
                correo: this.formPedido.get('correo')?.value,
                direccion: this.formPedido.get('direccion')?.value,
                productos: ['1', '2'],
                medioPago: 'visa',
                total: this.total,
            };

            this._api.postOrder(pedido).subscribe((data: any) => {
                this.formPedido.reset();
                Swal.fire({
                    title: '¡Creado!',
                    text: 'Usuario creado satisfactoriamente',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
            });
            this._api.clearCart().subscribe();
            this.router.navigate(['/']);
        }
    }
}
