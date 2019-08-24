export interface ObjetoInterface{
    id?:string,
    nombre?:string,
    imagen?:string,
    estadoR?: boolean,
    fechaIn?: Date,
    descripcion?: string,
    color?: string,
    horaIn?: string,
    eliminado?: boolean,
    calificacionEO?: Int32Array,
    subCategoria?: string,
    categoria?: string,
    lugar?: string
}
