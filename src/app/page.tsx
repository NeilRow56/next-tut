import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link href='/articles/breaking-news-123?lang=en'>Read in English</Link>
      <Link href='/articles/breaking-news-123?lang=fr'>Read in French</Link>
    </div>
  )
}

export default HomePage
