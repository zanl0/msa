import { Component } from '@angular/core';
import { ProductosAdminComponent } from '../productos-admin/productos-admin.component';
import { UsuariosAdminComponent } from '../usuarios-admin/usuarios-admin.component';
import { PedidosAdminComponent } from '../pedidos-admin/pedidos-admin.component';

@Component({
    selector: 'app-main-admin',
    standalone: true,
    imports: [
        ProductosAdminComponent,
        UsuariosAdminComponent,
        PedidosAdminComponent,
    ],
    templateUrl: './main-admin.component.html',
    styleUrl: './main-admin.component.scss',
})
export class MainAdminComponent {
    title: string = 'componentes';

    setComponent(title: string) {
        this.title = title;
    }
}
