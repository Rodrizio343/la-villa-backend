import { IProduct } from '@/domain/entities/product.entity'
import { IProductRepository } from '@/domain/repositories/product.repository'

export const getAllProducts = async (productRepository: IProductRepository): Promise<IProduct[]> => {
  try {
    const products = await productRepository.getAll()
    return products
  } catch (error) {
    throw new Error('getAllProducts error')
  }
}
