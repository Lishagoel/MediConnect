'use client'

import React from 'react'
import img from '../../public/hero-bg.jpg'
import TransitionText from './TransitionText'

export default function Hero() {
    const TEXTS = ['Therapy', 'Dental', 'Massage', 'Consultation', 'Surgery', 'Checkup', 'Vaccination'];
    return (
        <div
            className="mx-auto px-4 pt-50 pb-12 overflow-hidden md:px-8 md:flex bg-cover bg-center"
            style={{ backgroundImage: `url(${img.src})` }}
        >
            <div className='flex-none space-y-5 pl-14'>
                <h1 className="text-4xl font-extrabold sm:text-5xl pt-16">
                    <span className='text-blue-600'>Find Trusted Doctors</span>
                    <br />
                    <span>Anytime, Anywhere</span>
                </h1>
                <p className='text-xl font-bold flex gap-2'>
                    <span>Book your</span>
                    <TransitionText className='text-blue-600' TEXTS={TEXTS} />
                    <span>sessions now</span>
                </p>
                <div className='flex items-center gap-x-3 sm:text-sm'>
                    <a href="/#" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-600 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                        Book Now
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="/#" className="flex items-center justify-center gap-x-1 py-2 px-4 text-black hover:text-blue-900 font-medium duration-150 md:inline-flex">
                        Track Appointment
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02</svg>-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
