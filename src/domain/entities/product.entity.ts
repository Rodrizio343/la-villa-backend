export interface IProduct {
  id: number
  name: string
  description: string
  price: number
}

export const createProduct = (product: any): IProduct => ({
  id: product.id,
  name: product.name,
  description: product.description,
  price: product.price
})
