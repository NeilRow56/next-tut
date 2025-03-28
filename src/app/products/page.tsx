import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Product blog'
  }
}

export default function ProductList() {
  const productId = 100

  return (
    <div className='container mx-auto mt-12 flex w-full flex-col justify-center text-center text-2xl'>
      <div className='space-y-5'>
        <Link href='/'>Home</Link>
        <h1>Product List</h1>
        <h2>
          <Link href='products/1'>Product 1</Link>
        </h2>
        <h2>
          <Link href='products/2'>Product 2</Link>
        </h2>
        <h2>
          <Link href='products/3' replace>
            Product 3
          </Link>
        </h2>
        <h2>
          <Link href={`products/${productId}`}>Product {productId}</Link>
        </h2>
      </div>
    </div>
  )
}
