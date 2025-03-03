import HeroSection from '@/components/Frontend/Hero'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
    return (
        <div>
            <Navbar />
            <HeroSection />
            {children}
        </div>
    )
}

export default layout