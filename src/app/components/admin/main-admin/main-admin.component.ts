import { Component } from '@angular/core';
import { ProductosAdminComponent } from '../productos-admin/productos-admin.component';
import { UsuariosAdminComponent } from '../usuarios-admin/usuarios-admin.component';

@Component({
    selector: 'app-main-admin',
    standalone: true,
    imports: [ProductosAdminComponent, UsuariosAdminComponent],
    templateUrl: './main-admin.component.html',
    styleUrl: './main-admin.component.scss',
})
export class MainAdminComponent {
    title: string = 'usuarios';

    setComponent(title: string) {
        this.title = title;
    }
}
