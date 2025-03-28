import React from 'react'

import { Metadata } from 'next'

type Props = {
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const id = (await params).productId
  return {
    title: `Product ${id}`
  }
}

export default async function IndividualProductPage({ params }: Props) {
  const productId = (await params).productId
  return (
    <div className='mt-12 flex w-full justify-center text-2xl'>
      <span className='pr-5 text-3xl font-bold'>Details about product</span>
      <span className='text-3xl font-bold text-blue-600'>{productId}</span>
    </div>
  )
}
