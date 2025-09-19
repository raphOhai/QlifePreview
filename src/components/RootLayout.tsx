import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col min-h-screen '>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
