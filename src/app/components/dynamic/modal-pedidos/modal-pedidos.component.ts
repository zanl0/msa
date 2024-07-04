import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { PedidosService } from '../../../services/pedidos/pedidos.service';
import { Order } from '../../../models/pedidos';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-modal-pedidos',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './modal-pedidos.component.html',
    styleUrl: './modal-pedidos.component.scss',
})
export class ModalPedidosComponent {
    private numberPattern = /^[0-9]+$/;
    private emailPattern: RegExp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    formOrders: FormGroup;

    @Input() title: string = '';
    @Input() button: string = '';
    @Input() id: string | undefined = '';

    @Output() addOrderEvent = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private _api: PedidosService,
    ) {
        this.formOrders = this.formBuilder.group({
            nombre: ['', Validators.required],
            correo: [
                '',
                [Validators.required, Validators.pattern(this.emailPattern)],
            ],
            telefono: [
                '',
                [Validators.required, Validators.pattern(this.numberPattern)],
            ],
            direccion: ['', Validators.required],
            productos: ['', Validators.required],
            medioPago: ['', Validators.required],
            total: [
                '',
                [Validators.required, Validators.pattern(this.numberPattern)],
            ],
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['id'] || changes['title']) this.formOrders.reset();
        if (this.id && changes['id']) this.feedForm(this.id);
    }

    feedForm(id: string) {
        this._api.getOrderById(id).subscribe((data: any) => {
            this.formOrders.get('_id')?.setValue(data._id);
            this.formOrders.get('nombre')?.setValue(data.nombre);
            this.formOrders.get('correo')?.setValue(data.correo);
            this.formOrders.get('telefono')?.setValue(data.telefono);
            this.formOrders.get('direccion')?.setValue(data.direccion);
            this.formOrders
                .get('productos')
                ?.setValue(data.productos.join(', '));
            this.formOrders.get('medioPago')?.setValue(data.medioPago);
            this.formOrders.get('total')?.setValue(data.total);
        });
    }

    onSubmit() {
        if (this.formOrders.valid) {
            const order: Order = {
                nombre: this.formOrders.get('nombre')?.value,
                correo: this.formOrders.get('correo')?.value,
                telefono: this.formOrders.get('telefono')?.value,
                direccion: this.formOrders.get('direccion')?.value,
                productos: this.buildProducts(
                    this.formOrders.get('productos')?.value,
                ),
                medioPago: this.formOrders.get('medioPago')?.value,
                total: this.formOrders.get('total')?.value,
            };

            if (this.id) {
                this._api.putOrder(this.id, order).subscribe((data: any) => {
                    this.formOrders.reset();
                    Swal.fire({
                        title: '¡Actualizado!',
                        text: 'Pedido actualizado satisfactoriamente',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    this.addOrderEvent.emit(data);
                });
                this.id = '';
            } else {
                this._api.postOrder(order).subscribe((data: any) => {
                    this.formOrders.reset();
                    Swal.fire({
                        title: '¡Agregado!',
                        text: 'Pedido agregado satisfactoriamente',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    this.addOrderEvent.emit(data);
                });
            }
        } else {
            Swal.fire({
                title: 'ERROR',
                text: 'Hay algunos campos del formulario inválidos',
                icon: 'error',
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#d33',
            });
        }
    }

    private buildProducts(products: string): string[] {
        return products
            .split(',')
            .map((product) => product.trim())
            .filter((product) => product);
    }
}
