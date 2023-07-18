export interface Usuario {
    id: number,
    nombre: string,
    apellidos: string,
    dni: string,
    email: string,
    password: string,
    telefono: string,
    fecha_alta: Date,
    estado: boolean,
    departamento: string
}