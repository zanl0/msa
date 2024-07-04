import { Component } from '@angular/core';
import { ProductosAdminComponent } from '../productos-admin/productos-admin.component';
import { UsuariosAdminComponent } from '../usuarios-admin/usuarios-admin.component';
import { PedidosAdminComponent } from '../pedidos-admin/pedidos-admin.component';
import { ActivatedRoute, Router } from '@angular/router';

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
    isLogged: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        this.isLogged =
            this.activatedRoute.snapshot.paramMap.get('logged') !== null;

        if (!this.isLogged) this.router.navigate(['/login']);
    }

    setComponent(title: string) {
        this.title = title;
    }
}
