import {InputHTMLAttributes} from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
    return <input {...props} className="placeholder-zinc-500 text-zinc-500 rounded-[0.4rem] py-[1.2rem] px-[1.6rem] bg-zinc-900 outline-none"/>
}

export default Input