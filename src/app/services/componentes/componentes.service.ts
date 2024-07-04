import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/productos';

@Injectable({
    providedIn: 'root',
})
export class ComponentesService {
    private url = 'http://localhost:3000/api/v1/components';

    constructor(private http: HttpClient) {}

    getComponents() {
        return this.http.get(this.url);
    }

    getComponentById(id: string) {
        return this.http.get(`${this.url}/${id}`);
    }

    postComponent(product: Product) {
        return this.http.post(this.url, product);
    }

    putComponent(id: string, product: Product) {
        return this.http.put(`${this.url}/${id}`, product);
    }

    deleteComponent(id?: string) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
