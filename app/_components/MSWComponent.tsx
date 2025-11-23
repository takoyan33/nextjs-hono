'use client'

import { useEffect, useState } from 'react'

export function MSWComponent({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(
    process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled'
  )

  useEffect(() => {
    const init = async () => {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        // @ts-ignore
        const { initMocks } = await import('../../tests/mocks')
        console.log("initMocks")
        await initMocks()
        setMswReady(true)
      } else {
        setMswReady(true)
      }
    }

    init()
  }, [])

  if (!mswReady) return null

  return <>{children}</>
}
