import SignupForm from '@/components/Auth/SignupForm'
import React from 'react'

function page() {
    return (
        <div className='bg-blue-100 min-h-screen py-8'>
            <div className="grid md:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className='hidden md:flex linear-bg-signup'></div>
                <div>
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export default page