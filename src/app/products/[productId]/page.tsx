import React from 'react'

export default async function IndividualProductPage({
  params
}: {
  params: Promise<{ productId: string }>
}) {
  const productId = await (await params).productId
  return (
    <div className='mt-12 flex w-full justify-center text-2xl'>
      <span className='pr-5 text-3xl font-bold'>Details about product</span>
      <span className='text-3xl font-bold text-blue-600'>{productId}</span>
    </div>
  )
}
