import { createProduct, IProduct } from '@/domain/entities/product.entity'
import { IProductRepository } from '@/domain/repositories/product.repository'
import { productValidation } from '@/domain/services/productValidation'

export const saveProduct = async (
  productRepository: IProductRepository,
  productData: IProduct
): Promise<void> => {
  const { id, name, description, price } = productData
  const product = createProduct({ id, name, description, price })
  try {
    if (!productValidation(product)) {
      throw new Error('Invalid product')
    }
    await productRepository.save(product)
  } catch (error) {
    throw new Error('saveProduct error')
  }
}
