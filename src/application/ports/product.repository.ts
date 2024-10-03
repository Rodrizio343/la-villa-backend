import { IProduct } from '../../domain/entities/product.entity'
import { IProductRepository } from '../../domain/repositories/product.repository'

export const productRepository = (repository: IProductRepository): IProductRepository => {
  return {
    async save (product: IProduct) {
      return await repository.save(product)
    },
    async getById (id) {
      return await repository.getById(id)
    },
    async getAll () {
      return await repository.getAll()
    }
  }
}
