import FormInput from '@/components/form-input'
import Link from 'next/link'

const Login = () => {
    return (
        <div className='flex flex-col items-center p-10 gap-6'>
            <div className='my-auto'>
                <h1 className='text-3xl font-bold'>로그인</h1>
            </div>
            <form className='w-full gap-3 flex flex-col'>
                <FormInput
                    type='email'
                    placeholder='학생 이메일을 입력해주세요. (s25학번@yeongjong.icehs.kr)'
                />
                <FormInput
                    type='password'
                    placeholder='비밀번호를 입력해주세요.'
                />
                <button className='btn' type='submit'>로그인</button>
            </form>
            <div className='flex gap-1 text-gray-400'>
                <div>아직 계정이 없나요?</div>
                <div>&#183;</div>
                <Link href='/create-account' className='hover:underline'>회원가입</Link>
            </div>
        </div>
    )
}

export default Login