import { Component } from '@angular/core';
import { ProductosAdminComponent } from '../productos-admin/productos-admin.component';

@Component({
    selector: 'app-main-admin',
    standalone: true,
    imports: [ProductosAdminComponent],
    templateUrl: './main-admin.component.html',
    styleUrl: './main-admin.component.scss',
})
export class MainAdminComponent {
    title: string = 'componentes';

    setComponent(title: string) {
        this.title = title;
    }
}
