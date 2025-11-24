'use client'

import React, { useEffect, useState } from 'react'

type Product = {
  id: number
  title: string
  price: number
  userId: number
}

export const ProductListClient = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/products/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <div>Error: {error}</div>
  if (products.length === 0) return <div>Loading...</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">MSW Verification (Client Component)</h1>
      <div className="space-y-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.price}円</p>
            <p className="text-xs text-gray-400 mt-2">User ID: {product.userId}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
