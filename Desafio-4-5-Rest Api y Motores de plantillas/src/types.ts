
export enum Estado {
    Contento = "contento",
    Enojado = "enojado",
    Cansado = "cansado",
    Aburrido = "aburrido",
    Concentrado = "concentrado",
    Estresado = "estresado",
    Motivado = "motivado",
    Ocupado = "ocupado"
}

export enum Puesto {
    FrontDesktop = "Front-End con React para escritorio",
    FrontMobile = "Front-End con Kotlin para movil",
    FrontIos = "Front-End con Swift para Ios",
    Back = "Back-End con NodeJs y SQL",
    DataAnalytics = "Ciencia de datos con Python y R",
    Cloud = "AWS y Google",
    CyberSeguridad = "Pentester",
    Blockchain = "Haskell y Solidity"

}

export interface ProductsEntry {
    id: number,
    nombre: string,
    edad: number,
    comentario: string,
    estado: Estado,
    puesto: Puesto,
    thumbail: string
}

export type NonSensitiveInfoProductsEntry = Omit<ProductsEntry, "comentario">

export type NewProductEntry = Omit<ProductsEntry, "id">