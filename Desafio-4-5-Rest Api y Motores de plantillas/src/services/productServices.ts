import { ProductsEntry, NonSensitiveInfoProductsEntry, NewProductEntry } from '../../types'
import productData from './products.json'



const usuarios: ProductsEntry[] = productData as ProductsEntry[]

export const getEntries = (): ProductsEntry[] => usuarios

export const findById = (id: number): ProductsEntry | undefined => {
    const entry = usuarios.find(d => d.id = id)
    return entry
}



export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoProductsEntry[] => {
    return usuarios.map(({ id, nombre, edad, estado, puesto, thumbail }) => {
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
        id: Math.max(...usuarios.map(d => d.id)) + 1,
        ...newProductEntry
    }

    usuarios.push(newProduct)
    return newProduct
}


// export const DeleteProductById = (): Object => {
//     const DeleteById = products.splice(findById)
//     return DeleteById
// }