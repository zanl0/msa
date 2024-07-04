import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Subscription, catchError, tap } from 'rxjs';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    private subscriptions : Subscription = new Subscription()

    loginForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private api: LoginService,
        private router: Router
    ) {
        this.loginForm = this.formBuilder.group({
            usernameInput: ["", Validators.required],
            inputPassword: ["", Validators.required]
        })
    }
    inicio() {
        if (this.loginForm.valid) {
            const data = {
                usuario: this.loginForm.get("usernameInput")?.value,
                clave: this.loginForm.get("inputPassword")?.value
            }

            const subscription = this.api.login(data.usuario, data.clave)
            .pipe(
                tap((data: any) => {
                    this.loginForm.reset()
                    Swal.fire({
                        title: '¡Creado!',
                        text: 'Producto creado satisfactoriamente',
                        icon: 'success',
                        timer: 3000,
                        showConfirmButton: false,
                    });
                    this.router.navigate(["/admin"])
                }),
                catchError(error => {
                    if(error.status== 403){

                        Swal.fire({
                            title: '¡error!',
                            text: error.error.message,
                            icon: 'error',
                            timer: 3000,
                            showConfirmButton: false,
                        })
                    }
                    if  (error.status ==401){
                        Swal.fire({
                            title: '¡error!',
                            text: error.error.message,
                            icon: 'error',
                            timer: 3000,
                            showConfirmButton: false,
                        })
                    }
                    throw error
                })
            ).subscribe()
            this.subscriptions.add(subscription)
        } else {
        }
    }
    ngOnDestroy(){
        this.subscriptions.unsubscribe()
    }
}
