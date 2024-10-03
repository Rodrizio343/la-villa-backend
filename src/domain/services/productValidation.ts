import { IProduct } from '@/domain/entities/product.entity'

export const productValidation = (product: IProduct): boolean => {
  return product.price > 0 && product.name.length !== 0 && product.description.length !== 0
}
