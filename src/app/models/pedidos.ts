export interface Order {
    _id?: string;
    nombre: string;
    correo: string;
    telefono: number;
    direccion: string;
    productos: string[];
    medioPago: string;
    total: number;
}
