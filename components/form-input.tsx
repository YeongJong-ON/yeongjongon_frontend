interface FormInputType {
    type: 'email' | 'text' | 'password'
    placeholder: string
}

const FormInput = (props: FormInputType) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className='w-full ring-1 ring-gray-400 pl-3 py-2 rounded-md outline-none transition focus:ring-2 focus:ring-cblue'
            required
        />
    )
}

export default FormInput