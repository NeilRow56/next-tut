import Image from 'next/image'
import loader from '@/assets/loader.gif'
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const Loading = () => {
  // await delay(5)
  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <Image
        priority
        unoptimized
        src={loader}
        height={100}
        width={100}
        alt='Loading...'
      />
    </div>
  )
}

export default Loading
