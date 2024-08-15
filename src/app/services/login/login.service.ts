import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private url = 'http://18.118.160.34:3000/api/v1/login'
    constructor(private http: HttpClient) { }

    login(usuario: string, clave: string) {
        const data = { usuario, clave }
        return this.http.post(this.url, data)
    }
}
