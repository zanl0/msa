import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Product from '../../../models/productos';
import { ComponentesService } from '../../../services/componentes.service';
import { ModalContentComponent } from '../../dynamic/modal-content/modal-content.component';

@Component({
    selector: 'app-productos',
    standalone: true,
    imports: [ModalContentComponent],
    templateUrl: './productos-admin.component.html',
    styleUrl: './productos-admin.component.scss',
})
export class ProductosAdminComponent {
    title: string = 'componentes';
    modalTitle: string = '';
    urlImage: string = '';

    productos: Product[] = [];

    constructor(private _api: ComponentesService) {}

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this._api.getComponents().subscribe((data: any) => {
            this.productos = data;
        });
    }

    updateComponent(id: string) {
        return;
    }

    deleteComponent(id: string) {
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
                Swal.fire({
                    title: '¡Eliminado!',
                    text: `Producto ${id} eliminado satisfactoriamente`,
                    icon: 'success',
                    confirmButtonColor: 'var(--primary)',
                });
            }
        });
    }

    setImage(modalTitle: string, urlImage: string) {
        this.modalTitle = modalTitle;
        this.urlImage = urlImage;
    }
}
