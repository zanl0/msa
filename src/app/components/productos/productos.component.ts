import { Component } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { Product } from '../../models/productos';

@Component({
    selector: 'app-productos',
    standalone: true,
    imports: [CarruselComponent],
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.scss'
})
export class ProductosComponent {
    productos: Product[] = [
        {
            _id: '1',
            producto: 'Procesador Intel Core I9-13900F',
            marca: 'Intel',
            modelo: 'Core I9-13900F',
            caracteristicas: [
                'Frecuencia: 5.60GHz',
                'Núcleos: 24',
                'Subprocesos: 32',
            ],
            precio: 2299000,
            imagen: 'https://jesistem.com/wp-content/uploads/2023/04/13900F-600x450.png',
            size: "big"
        },
        {
            _id: '2',
            producto:
                'Motherboard MSI Gaming B660 Tomahawk EVA 01 Special Edition',
            marca: 'MSI',
            modelo: 'B660 Tomahawk EVA 01 Special Edition',
            caracteristicas: [
                'Soporte: Intel',
                'Socket: LGA 1700',
                'RAM: DDR5',
            ],
            precio: 899000,
            imagen: 'https://asset.msi.com/resize/image/global/product/product_16427334892956384d918b2f8ecc4693bcd3ef27e6.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
        },
        {
            _id: '3',
            producto: 'Memoria RAM 32GB Vengeance RGB',
            marca: 'Vengeance',
            modelo: 'RAM',
            caracteristicas: [
                'Frecuencia: 7200MHz',
                'Versión: DDR5',
                'Capacidad: 2x16 GB',
            ],
            precio: 1499000,
            imagen: 'https://static.wixstatic.com/media/ff5fa3_142b288366be4821bc6bb621f04e4323~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ff5fa3_142b288366be4821bc6bb621f04e4323~mv2.png',
        },
        {
            _id: '1',
            producto: 'Procesador Intel Core I9-13900F',
            marca: 'Intel',
            modelo: 'Core I9-13900F',
            caracteristicas: [
                'Frecuencia: 5.60GHz',
                'Núcleos: 24',
                'Subprocesos: 32',
            ],
            precio: 2299000,
            imagen: 'https://jesistem.com/wp-content/uploads/2023/04/13900F-600x450.png',
        },
        {
            _id: '2',
            producto:
                'Motherboard MSI Gaming B660 Tomahawk EVA 01 Special Edition',
            marca: 'MSI',
            modelo: 'B660 Tomahawk EVA 01 Special Edition',
            caracteristicas: [
                'Soporte: Intel',
                'Socket: LGA 1700',
                'RAM: DDR5',
            ],
            precio: 899000,
            imagen: 'https://asset.msi.com/resize/image/global/product/product_16427334892956384d918b2f8ecc4693bcd3ef27e6.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
        },
        {
            _id: '3',
            producto: 'Memoria RAM 32GB Vengeance RGB',
            marca: 'Vengeance',
            modelo: 'RAM',
            caracteristicas: [
                'Frecuencia: 7200MHz',
                'Versión: DDR5',
                'Capacidad: 2x16 GB',
            ],
            precio: 1499000,
            imagen: 'https://static.wixstatic.com/media/ff5fa3_142b288366be4821bc6bb621f04e4323~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ff5fa3_142b288366be4821bc6bb621f04e4323~mv2.png',
            size: "big",
        },
        {
            _id: '1',
            producto: 'Procesador Intel Core I9-13900F',
            marca: 'Intel',
            modelo: 'Core I9-13900F',
            caracteristicas: [
                'Frecuencia: 5.60GHz',
                'Núcleos: 24',
                'Subprocesos: 32',
            ],
            precio: 2299000,
            imagen: 'https://jesistem.com/wp-content/uploads/2023/04/13900F-600x450.png',
        },
        {
            _id: '2',
            producto:
                'Motherboard MSI Gaming B660 Tomahawk EVA 01 Special Edition',
            marca: 'MSI',
            modelo: 'B660 Tomahawk EVA 01 Special Edition',
            caracteristicas: [
                'Soporte: Intel',
                'Socket: LGA 1700',
                'RAM: DDR5',
            ],
            precio: 899000,
            imagen: 'https://asset.msi.com/resize/image/global/product/product_16427334892956384d918b2f8ecc4693bcd3ef27e6.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
        },
        {
            _id: '3',
            producto: 'Memoria RAM 32GB Vengeance RGB',
            marca: 'Vengeance',
            modelo: 'RAM',
            caracteristicas: [
                'Frecuencia: 7200MHz',
                'Versión: DDR5',
                'Capacidad: 2x16 GB',
            ],
            precio: 1499000,
            imagen: 'https://static.wixstatic.com/media/ff5fa3_142b288366be4821bc6bb621f04e4323~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ff5fa3_142b288366be4821bc6bb621f04e4323~mv2.png',
        },
        {
            _id: '3',
            producto: 'Memoria RAM 32GB Vengeance RGB',
            marca: 'Vengeance',
            modelo: 'RAM',
            caracteristicas: [
                'Frecuencia: 7200MHz',
                'Versión: DDR5',
                'Capacidad: 2x16 GB',
            ],
            precio: 1499000,
            imagen: 'https://static.wixstatic.com/media/ff5fa3_142b288366be4821bc6bb621f04e4323~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ff5fa3_142b288366be4821bc6bb621f04e4323~mv2.png',
        },
    ];

}
