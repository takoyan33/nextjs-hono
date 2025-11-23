'use client'

import { useEffect } from 'react'

export function MSWComponent() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      // @ts-ignore
      import('../../tests/mocks').then(({ initMocks }) => {
        initMocks()
      })
    }
  }, [])

  return null
}
