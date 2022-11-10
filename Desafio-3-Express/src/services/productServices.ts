import { ProductsEntry, NonSensitiveInfoProductsEntry } from '../types'
import productsData from './products.json'

const products: ProductsEntry[] = productsData as ProductsEntry[]

export const getEntries = (): ProductsEntry[] => products

export const findById = (id: number): ProductsEntry | undefined => {
    const entry = products.find(d => d.id = id)
    return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoProductsEntry[] => {
    return products.map(({ id, title, price }) => {
        return {
            id,
            title,
            price
        }
    })
}

export const addEntry = (): undefined => undefined