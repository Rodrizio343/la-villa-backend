import { promises as fs } from 'fs'
import { IProduct } from '@/domain/entities/product.entity'
import { IProductRepository } from '@/domain/repositories/product.repository'

const filePath = 'src/tests/product/mocks/products.json'

export const productRepositoryMock: IProductRepository = {

  async save (product: IProduct): Promise<IProduct> {
    return product
  },
  async getById (id: number): Promise<IProduct | null> {
    const products = await getProductsData()

    const product = products.find(p => p.id === id)

    if (product == null) return null
    return product
  },
  async getAll (): Promise<IProduct[]> {
    const products = await getProductsData()

    return products
  }

}

const getProductsData = async (): Promise<IProduct[]> => {
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data) as IProduct[]
}
