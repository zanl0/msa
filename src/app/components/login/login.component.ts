import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, catchError, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login/login.service';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    private subscriptions: Subscription = new Subscription();

    logged: boolean = false;
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private api: LoginService,
        private router: Router,
    ) {
        this.loginForm = this.formBuilder.group({
            usernameInput: ['', Validators.required],
            inputPassword: ['', Validators.required],
        });
    }

    inicio() {
        if (this.loginForm.valid) {
            const data = {
                usuario: this.loginForm.get('usernameInput')?.value,
                clave: this.loginForm.get('inputPassword')?.value,
            };

            const subscription = this.api
                .login(data.usuario, data.clave)
                .pipe(
                    tap((data: any) => {
                        this.loginForm.reset();
                        Swal.fire({
                            title: '¡Bienvenid@!',
                            text: 'Sesión iniciada',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                        });
                        this.logged = true;
                        this.router.navigate([
                            '/admin',
                            { logged: this.logged },
                        ]);
                    }),
                    catchError((error) => {
                        if (error.status === 403 || error.status === 401) {
                            Swal.fire({
                                title: '¡Error!',
                                text: error.error.message,
                                icon: 'error',
                                timer: 3000,
                                showConfirmButton: false,
                            });
                        } else {
                            Swal.fire({
                                title: '¡Error!',
                                text: 'Ocurrió un error inesperado' + error,
                                icon: 'error',
                                timer: 5000,
                                showConfirmButton: false,
                            });
                        }
                        throw error;
                    }),
                )
                .subscribe();
            this.subscriptions.add(subscription);
        } else {
            Swal.fire({
                title: '¡Error!',
                text: 'El formulario tiene campos inválidos',
                icon: 'error',
                timer: 3000,
                showConfirmButton: false,
            });
        }
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
