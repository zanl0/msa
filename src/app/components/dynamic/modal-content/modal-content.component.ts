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
import Swal from 'sweetalert2';
import { Product } from '../../../models/productos';
import { ComponentesService } from '../../../services/componentes.service';

@Component({
    selector: 'app-modal-content',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './modal-content.component.html',
    styleUrl: './modal-content.component.scss',
})
export class ModalContentComponent {
    @Input() title: string = '';
    @Input() button: string = '';
    @Input() id: string | undefined = '';

    @Output() addProductEvent = new EventEmitter<any>();

    private numberPattern = /^[0-9]+$/;
    formProducts: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private _api: ComponentesService,
    ) {
        this.formProducts = this.formBuilder.group({
            producto: ['', Validators.required],
            marca: ['', Validators.required],
            modelo: ['', Validators.required],
            caracteristicas: ['', Validators.required],
            precio: [
                '',
                [Validators.required, Validators.pattern(this.numberPattern)],
            ],
            imagen: ['', Validators.required],
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['title']) this.formProducts.reset();
        if (this.id && changes['id']) this.feedForm(this.id);
    }

    feedForm(id: string) {
        this._api.getComponentById(id).subscribe((data: any) => {
            this.formProducts.get('producto')?.setValue(data.producto);
            this.formProducts.get('marca')?.setValue(data.marca);
            this.formProducts.get('modelo')?.setValue(data.modelo);
            this.formProducts
                .get('caracteristicas')
                ?.setValue(data.caracteristicas.join(', '));
            this.formProducts.get('precio')?.setValue(data.precio);
            this.formProducts.get('imagen')?.setValue(data.imagen);
        });
    }

    onSubmit() {
        if (this.formProducts.valid) {
            const product: Product = {
                producto: this.formProducts.get('producto')?.value,
                marca: this.formProducts.get('marca')?.value,
                modelo: this.formProducts.get('modelo')?.value,
                caracteristicas: this.buildFeatures(
                    this.formProducts.get('caracteristicas')?.value,
                ),
                precio: this.formProducts.get('precio')?.value,
                imagen: this.formProducts.get('imagen')?.value,
            };

            if (this.id) {
                this._api
                    .putComponent(this.id, product)
                    .subscribe((data: any) => {
                        this.formProducts.reset();
                        Swal.fire({
                            title: '¡Actualizado!',
                            text: 'Producto actualizado satisfactoriamente',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                        });
                        this.addProductEvent.emit(data);
                    });
                /* this.id = undefined; */
            } else {
                this._api.postComponent(product).subscribe((data: any) => {
                    this.formProducts.reset();
                    Swal.fire({
                        title: '¡Creado!',
                        text: 'Producto creado satisfactoriamente',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    this.addProductEvent.emit(data);
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

    private buildFeatures(features: string): string[] {
        return features
            .split(',')
            .map((feature) => feature.trim())
            .filter((feature) => feature);
    }
}
