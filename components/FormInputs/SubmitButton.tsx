import { Loader } from 'lucide-react'
import React from 'react'

type SubmitButtonProps = {
    title: string,
    buttonType?: "submit" | "button" | "reset" | undefined,
    isLoading?: boolean
}

function SubmitButton({ title, buttonType = "submit", isLoading = false }: SubmitButtonProps) {
    return (
        <>
            {isLoading ? (
                <button
                    type={buttonType}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <Loader /> {title}
                </button>
            ) : (
                <button
                    type={buttonType}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {title}
                </button>
            )}
        </>
    )
}

export default SubmitButton