import React from 'react'
import { render } from 'vitest-browser-react'
import { expect, test, beforeAll, afterAll } from 'vitest'
import { ProductListClient } from './ProductListClient'
import { worker } from '../../../tests/mocks/browser'

// Start the MSW worker before the tests
beforeAll(async () => {
  await worker.start()
})

// Stop the MSW worker after the tests
afterAll(() => {
  worker.stop()
})

test('renders mocked products', async () => {
  const { getByText } = await render(<ProductListClient />)
  
  // Wait for the products to be rendered
  await expect.element(getByText('Mocked Product 1')).toBeInTheDocument()
  await expect.element(getByText('100円')).toBeInTheDocument()
})
