import FormInput from '@/components/form-input'

const CreateAccount = () => {
    return (
        <div className='flex flex-col items-center p-10 gap-6'>
            <div className='my-auto'>
                <h1 className='text-3xl font-bold'>회원가입</h1>
            </div>
            <form className='w-full gap-3 flex flex-col'>
                <FormInput
                    type='email'
                    placeholder='학생 이메일을 입력해주세요. (s25학번@yeongjong.icehs.kr)'
                />
                <FormInput
                    type='text'
                    placeholder='본명을 입력해주세요.'
                />
                <FormInput
                    type='password'
                    placeholder='비밀번호를 입력해주세요.'
                />
                <FormInput
                    type='password'
                    placeholder='비밀번호를 다시 입력해주세요.'
                />
                <button className='btn' type='submit'>가입하기</button>
            </form>
        </div>
    )
}

export default CreateAccount