import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../../../models/productos';
import { ComponentesService } from '../../../services/componentes.service';
import { ModalContentComponent } from '../../dynamic/modal-content/modal-content.component';
import { ModalImageComponent } from '../../dynamic/modal-image/modal-image.component';

@Component({
    selector: 'app-productos',
    standalone: true,
    imports: [ModalContentComponent, ModalImageComponent],
    templateUrl: './productos-admin.component.html',
    styleUrl: './productos-admin.component.scss',
})
export class ProductosAdminComponent {
    title: string = 'componentes';
    modalTitle: string = '';
    modalButton: string = 'Agregar';
    urlImage: string = '';
    componentId: string | undefined = '';

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

    deleteComponent(producto: string, id?: string) {
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
                this._api.deleteComponent(id).subscribe((data: any) => {
                    Swal.fire({
                        title: '¡Eliminado!',
                        text: `${producto} eliminado satisfactoriamente`,
                        icon: 'success',
                        timer: 2500,
                        showConfirmButton: false,
                    });
                    this.productos.splice(
                        this.productos.findIndex(
                            (producto) => producto._id === id,
                        ),
                        1,
                    );
                });
            }
        });
    }

    showImage(modalTitle: string, urlImage: string) {
        this.modalTitle = modalTitle;
        this.urlImage = urlImage;
    }

    setModalContent(modalTitle: string, element?: string) {
        this.modalTitle = modalTitle;

        const idRegex = /^[0-9a-fA-F]{24}$/;
        if (element && idRegex.test(element)) {
            this.componentId = element;
            this.modalButton = 'Modificar';
        } else {
            this.modalButton = 'Agregar';
        }
    }

    updateTable(product: Product) {
        this.getProducts();
    }
}
