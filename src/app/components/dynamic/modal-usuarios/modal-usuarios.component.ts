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
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { User } from '../../../models/usuarios';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-modal-usuarios',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './modal-usuarios.component.html',
    styleUrl: './modal-usuarios.component.scss',
})
export class ModalUsuariosComponent {
    private numberPattern = /^[0-9]+$/;
    private emailPattern: RegExp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    formUsers: FormGroup;

    @Input() title: string = '';
    @Input() button: string = '';
    @Input() id: string | undefined = '';
    @Input() username: string | undefined = '';

    @Output() addUserEvent = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private _api: UsuariosService,
    ) {
        this.formUsers = this.formBuilder.group({
            usuario: ['', Validators.required],
            clave: ['', [Validators.required, Validators.minLength(8)]],
            nombre: ['', Validators.required],
            telefono: [
                '',
                [Validators.required, Validators.pattern(this.numberPattern)],
            ],
            correo: [
                '',
                [Validators.required, Validators.pattern(this.emailPattern)],
            ],
            admin: ['', Validators.required],
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['id'] || changes['title']) this.formUsers.reset();
        if (this.id && changes['id'] && this.username)
            this.feedForm(this.username);
    }

    feedForm(username: string) {
        this._api.getUserByUsername(username).subscribe((data: any) => {
            this.formUsers.get('usuario')?.setValue(data.usuario);
            this.formUsers.get('clave')?.setValue(data.clave);
            this.formUsers.get('nombre')?.setValue(data.nombre);
            this.formUsers.get('telefono')?.setValue(data.telefono);
            this.formUsers.get('correo')?.setValue(data.correo);
            this.formUsers.get('admin')?.setValue(data.admin);
        });
    }

    onSubmit() {
        if (this.formUsers.valid) {
            const user: User = {
                usuario: this.formUsers.get('usuario')?.value,
                clave: this.formUsers.get('clave')?.value,
                nombre: this.formUsers.get('nombre')?.value,
                telefono: this.formUsers.get('telefono')?.value,
                correo: this.formUsers.get('correo')?.value,
                admin: this.formUsers.get('admin')?.value,
            };

            if (this.id) {
                this._api.putUser(this.id, user).subscribe((data: any) => {
                    this.formUsers.reset();
                    Swal.fire({
                        title: '¡Actualizado!',
                        text: 'Usuario actualizado satisfactoriamente',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    this.addUserEvent.emit(data);
                });
                this.id = '';
            } else {
                this._api.postUser(user).subscribe((data: any) => {
                    this.formUsers.reset();
                    Swal.fire({
                        title: '¡Creado!',
                        text: 'Usuario creado satisfactoriamente',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    this.addUserEvent.emit(data);
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
}
