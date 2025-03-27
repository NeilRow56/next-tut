import React from 'react'

export default async function Docs({
  params
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params

  if (slug?.length === 2) {
    return (
      <div className='container mx-auto mt-12 flex w-full flex-col justify-center text-center text-2xl'>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </div>
    )
  } else if (slug?.length === 1) {
    return (
      <div className='container mx-auto mt-12 flex w-full flex-col justify-center text-center text-2xl'>
        Viewing docs for {slug[0]}
      </div>
    )
  }
  return (
    <div className='container mx-auto mt-12 flex w-full flex-col justify-center text-center text-2xl'>
      Viewing documentation home page
    </div>
  )
}
