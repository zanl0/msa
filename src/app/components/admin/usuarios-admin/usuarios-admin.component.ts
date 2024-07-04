import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../../../models/usuarios';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { ModalUsuariosComponent } from '../../dynamic/modal-usuarios/modal-usuarios.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-usuarios-admin',
    standalone: true,
    imports: [ModalUsuariosComponent, NgClass],
    templateUrl: './usuarios-admin.component.html',
    styleUrl: './usuarios-admin.component.scss',
})
export class UsuariosAdminComponent {
    usuarios: User[] = [];

    modalTitle: string = '';
    modalButton: string = 'Crear';
    userId: string | undefined = '';
    username: string | undefined = '';
    show: boolean = false;

    constructor(private _api: UsuariosService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this._api.getUsers().subscribe((data: any) => {
            this.usuarios = data;
        });
    }

    deleteUser(user: string, id?: string) {
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
                this._api.deleteUser(id).subscribe((data: any) => {
                    Swal.fire({
                        title: '¡Eliminado!',
                        text: `${user} eliminado satisfactoriamente`,
                        icon: 'success',
                        timer: 2500,
                        showConfirmButton: false,
                    });
                    this.usuarios.splice(
                        this.usuarios.findIndex(
                            (usuario) => usuario._id === id,
                        ),
                        1,
                    );
                });
            }
        });
    }

    setModalContent(modalTitle: string, id?: string, username?: string) {
        this.modalTitle = modalTitle;

        if (id) {
            this.userId = id;
            this.username = username;
            this.modalButton = 'Modificar';
        } else {
            this.modalButton = 'Crear';
        }
    }

    updateTable(user: User) {
        this.getUsers();
    }

    showPassword() {
        this.show = !this.show;
    }
}
