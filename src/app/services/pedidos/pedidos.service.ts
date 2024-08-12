import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/pedidos';

@Injectable({
    providedIn: 'root',
})
export class PedidosService {
    private url = 'http://3.16.129.0:3000/api/v1/orders';

    constructor(private http: HttpClient) {}

    getOrders() {
        return this.http.get(this.url);
    }

    getOrderById(id: string) {
        return this.http.get(`${this.url}/${id}`);
    }

    postOrder(order: Order) {
        return this.http.post(this.url, order);
    }

    putOrder(id: string, order: Order) {
        return this.http.put(`${this.url}/${id}`, order);
    }

    deleteOrder(id?: string) {
        return this.http.delete(`${this.url}/${id}`);
    }

    clearCart() {
        return this.http.delete(`${this.url}/all`);
    }
}
