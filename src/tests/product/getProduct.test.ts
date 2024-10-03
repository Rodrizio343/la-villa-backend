import { getProduct } from '../../application/use-cases/product/getProduct.use-case'
import { productRepositoryMock } from './mocks/productRepository.mock'

describe('getProduct', () => {
  it('should return a product with a valid ID', async () => {
    const id = 1
    const product = await getProduct(productRepositoryMock, id)

    expect(product).toBeDefined()
    expect(product?.id).toBe(id)
    expect(product?.name).toBe('Product 1')
  })

  it('should throw an error if the ID is invalid', async () => {
    const invalidId = 999

    await expect(getProduct(productRepositoryMock, invalidId))
      .rejects
      .toThrow('getProduct error')
  })
})
