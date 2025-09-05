import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const NAV_LIST = [
        {
            name: '전체',
            link: 'all'
        },
        {
            name: '1학년',
            link: 'first_grade'
        },
        {
            name: '2학년',
            link: 'second_grade'
        },
        {
            name: '3학년',
            link: 'third_grade'
        },
    ]
    return (
        <nav className='fixed h-18 border-b border-gray-300 w-full flex items-center justify-between px-16 font-medium'>
            <div className='flex items-center gap-10'>
                <Link href='/community'>
                    <Image src='/img/icon.svg' alt='icon' width={130} height={100} />
                </Link>
                <div className='flex items-center gap-10 text-lg border-l border-gray-300 pl-10'>
                    {NAV_LIST.map(({name, link}, i) => <Link className='hover:text-cblue transition-colors' href={`/community/${link}`} key={i}>{name}</Link>)}
                </div>
            </div>
            <Link href='/mypage' className='flex gap-3 items-center bg-white hover:brightness-95 p-2 rounded-md'>
                <div>
                    <Image className='size-10 rounded-full border border-gray-300' src='/img/profile_img.svg' alt='profile' width={100} height={100} />
                </div>
                <div className='text-lg flex'>
                    <div className='font-semi_bold text-black'>11021 임준석</div>님
                </div>
            </Link>
        </nav>
    )
}

export default NavBar