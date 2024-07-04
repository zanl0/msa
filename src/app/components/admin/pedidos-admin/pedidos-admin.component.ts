import { Component } from '@angular/core';
import { Order } from '../../../models/pedidos';
import { ModalPedidosComponent } from '../../dynamic/modal-pedidos/modal-pedidos.component';
import { PedidosService } from '../../../services/pedidos/pedidos.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-pedidos-admin',
    standalone: true,
    imports: [ModalPedidosComponent],
    templateUrl: './pedidos-admin.component.html',
    styleUrl: './pedidos-admin.component.scss',
})
export class PedidosAdminComponent {
    pedidos: Order[] = [];

    modalTitle: string = '';
    modalButton: string = 'Agregar';
    orderId: string | undefined = '';

    constructor(private _api: PedidosService) {}

    ngOnInit() {
        this.getOrders();
    }

    getOrders() {
        this._api.getOrders().subscribe((data: any) => {
            this.pedidos = data;
        });
    }

    deleteOrder(id?: string) {
        Swal.fire({
            title: '¿Eliminar?',
            text: 'No es posible revertir este cambio',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--primary)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
        }).then((result) => {
            if (result.isConfirmed) {
                this._api.deleteOrder(id).subscribe((data: any) => {
                    Swal.fire({
                        title: '¡Eliminado!',
                        text: `Pedido ${id} eliminado satisfactoriamente`,
                        icon: 'success',
                        timer: 2500,
                        showConfirmButton: false,
                    });
                    this.pedidos.splice(
                        this.pedidos.findIndex((pedido) => pedido._id === id),
                        1,
                    );
                });
            }
        });
    }

    setModalContent(modalTitle: string, id?: string) {
        this.modalTitle = modalTitle;

        const idRegex = /^[0-9a-fA-F]{24}$/;
        if (id && idRegex.test(id)) {
            this.orderId = id;
            this.modalButton = 'Modificar';
        } else {
            this.modalButton = 'Agregar';
        }
    }

    updateTable(order: Order) {
        this.getOrders();
    }
}
