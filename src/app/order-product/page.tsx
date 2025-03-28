'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function OrderProductPage() {
  const router = useRouter()
  const handleClick = () => {
    console.log('Placing yout order')
    router.push('/')
    // also
    // router.replace router.refresh
    // The API for router.replace is exactly the same as the API for router.push.
  }

  return (
    <div className='container mx-auto mt-12 flex w-full flex-col justify-center text-center text-2xl'>
      <h1>Order Product Page</h1>
      <div className='mt-4'>
        <Button className='w-[150px]' onClick={handleClick}>
          Place order
        </Button>
      </div>
    </div>
  )
}
