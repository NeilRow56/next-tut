import Image from 'next/image'

const Loading = () => {
  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <Image
        placeholder='blur'
        blurDataURL={'/assets/loader.gif'}
        src={'/assets/load.gif'}
        height={100}
        width={100}
        alt='Loading...'
      />
    </div>
  )
}

export default Loading
