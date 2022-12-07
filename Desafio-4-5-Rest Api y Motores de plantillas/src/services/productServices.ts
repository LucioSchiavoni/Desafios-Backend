import { ProductsEntry, NonSensitiveInfoProductsEntry, NewProductEntry } from '../types'
import productData from './products.json'



const products: ProductsEntry[] = productData as ProductsEntry[]

export const getEntries = (): ProductsEntry[] => products

export const findById = (id: number): ProductsEntry | undefined => {
    const entry = products.find(d => d.id = id)
    return entry
}



export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoProductsEntry[] => {
    return products.map(({ id, nombre, edad, estado, puesto, thumbail }) => {
        return {
            id,
            nombre,
            edad,
            estado,
            puesto,
            thumbail
        }
    })
}

export const addProduct = (newProductEntry: NewProductEntry): ProductsEntry => {
    const newProduct = {
        id: Math.max(...products.map(d => d.id)) + 1,
        ...newProductEntry
    }

    products.push(newProduct)
    return newProduct
}


// export const DeleteProductById = (): Object => {
//     const DeleteById = products.splice(findById)
//     return DeleteById
// }