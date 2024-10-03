import { promises as fs } from 'fs'
import { getAllProducts } from '../../application/use-cases/product/getAllProducts.use-case'
import { productRepositoryMock } from './mocks/productRepository.mock'

describe('getAllProduct', () => {
  it('should return all the products', async () => {
    const products = await getAllProducts(productRepositoryMock)

    expect(products).toBeDefined()
    expect(products).toHaveLength(3)
  })

  it('should throw an error if query goes wrong', async () => {
    jest.spyOn(fs, 'readFile').mockRejectedValue(new Error('getAllProducts error'))
    await expect(getAllProducts(productRepositoryMock)).rejects.toThrow('getAllProducts error')
    jest.restoreAllMocks()
  })
})
