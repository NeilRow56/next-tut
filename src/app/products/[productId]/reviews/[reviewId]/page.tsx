import { notFound } from 'next/navigation'
import React from 'react'

export default async function IndividualProductReviewPage({
  params
}: {
  params: Promise<{ productId: string; reviewId: string }>
}) {
  const { productId, reviewId } = await params

  if (parseInt(reviewId) > 1000) {
    notFound()
  }
  return (
    <div className='mt-12 flex w-full justify-center text-2xl'>
      <h1 className='text-3xl font-bold text-green-800'>
        Review {reviewId} for Product {productId}
      </h1>
    </div>
  )
}
