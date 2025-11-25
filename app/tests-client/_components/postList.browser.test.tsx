import React from 'react'
import { render } from 'vitest-browser-react'
import { expect, test, beforeAll, afterAll } from 'vitest'
import { PostList } from './postList'
import { worker } from '../../../tests/mocks/browser'

// Start the MSW worker before the tests
beforeAll(async () => {
  await worker.start()
})

// Stop the MSW worker after the tests
afterAll(() => {
  worker.stop()
})

test('renders mocked posts', async () => {
  const { getByText } = await render(<PostList />)
  
  // Wait for the posts to be rendered
  await expect.element(getByText('Mocked Post 1')).toBeInTheDocument()
  await expect.element(getByText('This is a mocked post body.')).toBeInTheDocument()
})
