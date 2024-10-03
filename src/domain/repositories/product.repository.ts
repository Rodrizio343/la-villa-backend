import { IProduct } from '@/domain/entities/product.entity'

export interface IProductRepository {
  save: (product: IProduct) => Promise<IProduct>
  getAll: () => Promise<IProduct[]>
  getById: (id: number) => Promise<IProduct | null>
}
