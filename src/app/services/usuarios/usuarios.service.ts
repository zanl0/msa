import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/usuarios';

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {
    private url = 'http://3.145.135.118:3000/api/v1/users';

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get(this.url);
    }

    getUserByUsername(usuario: string) {
        return this.http.get(`${this.url}/${usuario}`);
    }

    postUser(user: User) {
        return this.http.post(this.url, user);
    }

    putUser(id: string, user: User) {
        return this.http.put(`${this.url}/${id}`, user);
    }

    deleteUser(id?: string) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
