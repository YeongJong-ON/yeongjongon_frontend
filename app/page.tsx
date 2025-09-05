import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen p-10'>
      <div className='my-auto flex flex-col items-center gap-3'>
        <Image src='/img/icon.svg' alt='logo' width={250} height={250} />
        <p className='text-2xl font-medium'>오직 영종고 학생들만을 위한 커뮤니티</p>
      </div>
      <div className='flex flex-col items-center w-full gap-2'>
        <Link href='/create-account' className='btn text-center'>시작하기</Link>
        <Link href='/login' className='bg-white border border-cblue text-cblue w-full py-2 cursor-pointer rounded-md text-lg hover:brightness-95 transition-all text-center'>로그인</Link>
      </div>
    </div>
  )
}

export default Home