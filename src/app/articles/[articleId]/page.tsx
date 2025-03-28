// 'use client'
// import Link from 'next/link'
// import { use } from 'react'

// export default function NewsArticle({
//   params,
//   searchParams
// }: {
//   params: Promise<{ articleId: string }>
//   searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>
// }) {
//   const { articleId } = use(params)
//   const { lang = 'en' } = use(searchParams)
//   return (
//     <div className='flex flex-col space-y-3'>
//       <h1 className='text-2xl font-bold'>News article #{articleId}</h1>
//       <p className='textxl font-semibold'>
//         Reading in language:{lang.toUpperCase()}
//       </p>
//       <div className='flex w-full space-x-4'>
//         <Link className='pl-3' href={`/articles/${articleId}?lang=en`}>
//           English
//         </Link>{' '}
//         |
//         <Link className='pl-3' href={`/articles/${articleId}?lang=es`}>
//           Español
//         </Link>{' '}
//         |
//         <Link className='pl-3' href={`/articles/${articleId}?lang=fr`}>
//           Français
//         </Link>
//       </div>
//     </div>
//   )
// }

//server component - above is the way to get params and search params in a client component
import Link from 'next/link'

export default async function NewsArticle({
  params,
  searchParams
}: {
  params: Promise<{ articleId: string }>
  searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>
}) {
  const { articleId } = await params
  const { lang = 'en' } = await searchParams
  return (
    <div className='flex flex-col space-y-3'>
      <h1 className='text-2xl font-bold'>News article #{articleId}</h1>
      <p className='textxl font-semibold'>
        Reading in language:{lang.toUpperCase()}
      </p>
      <div className='flex w-full space-x-4'>
        <Link className='pl-3' href={`/articles/${articleId}?lang=en`}>
          English
        </Link>{' '}
        |
        <Link className='pl-3' href={`/articles/${articleId}?lang=es`}>
          Español
        </Link>{' '}
        |
        <Link className='pl-3' href={`/articles/${articleId}?lang=fr`}>
          Français
        </Link>
      </div>
    </div>
  )
}
