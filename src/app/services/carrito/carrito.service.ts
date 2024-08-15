import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from '../../models/carrito';

@Injectable({
    providedIn: 'root',
})
export class CarritoService {
    private url = 'http://18.118.160.34:3000/api/v1/cart';

    constructor(private http: HttpClient) {}

    getCartItems() {
        return this.http.get(this.url);
    }

    getCartItemById(id: string) {
        return this.http.get(`${this.url}/${id}`);
    }

    addToCart(carrito?: Carrito) {
        console.log('------------------------',carrito);

        return this.http.post(this.url, carrito);
    }

    updateCartItem(id: string, carrito: Carrito) {
        return this.http.put(`${this.url}/${id}`, carrito);
    }

    deleteCartItem(id?: string) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
