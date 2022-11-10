export type title = "Havanna clasico" | "Havanna cacao" | "Havanna dulce de leche"

export interface ProductsEntry {
    id: number,
    title: string,
    price: number,
    thumbail: thumbail
}

export type NonSensitiveInfoProductsEntry = Omit<ProductsEntry, "thumbail">