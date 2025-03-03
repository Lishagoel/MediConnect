import Hero from '@/components/Frontend/Hero'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default layout