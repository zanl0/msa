import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/productos';

@Injectable({
    providedIn: 'root',
})
export class ComponentesService {
    private url = 'http://localhost:3000/api/v1';

    constructor(private http: HttpClient) {}

    getComponents() {
        console.log(`${this.url}/components`);

        return this.http.get(`${this.url}/components`);
    }

    getComponentById() {
        return;
    }

    postComponent(product: Product) {
        return this.http.post(`${this.url}/components`, product);
    }

    updateComponent() {
        return;
    }

    deleteComponent() {
        return;
    }
}
