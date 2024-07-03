export interface Product {
    _id?: string;
    producto: string;
    marca: string;
    modelo: string;
    caracteristicas: string[];
    precio: number;
    imagen: string;
    size?: string
}
