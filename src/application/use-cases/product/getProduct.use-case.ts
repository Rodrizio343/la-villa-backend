import { IProduct } from '@/domain/entities/product.entity'
import { IProductRepository } from '@/domain/repositories/product.repository'

export const getProduct = async (productRepository: IProductRepository, id: number): Promise<IProduct | null> => {
  try {
    const product = await productRepository.getById(id)
    if (product == null) {
      throw new Error('Product does not exist')
    }
    return product
  } catch (error) {
    throw new Error('getProduct error')
  }
}
