import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import HeaderMobile from '@/components/header-mobile'
import SideNav from '@/components/side-nav'
import PageWrapper from '@/components/page-wrapper'
import MarginWidthWrapper from '@/components/margin-width-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'LPD Auto Detail',
    description: "San Diego's Finest Auto Detailing",
    icons: {
        icon: '/favicon.svg',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`bg-white ${inter.className}`}>
                <div className="flex">
                    <SideNav />
                    <main className="flex-1">
                        <MarginWidthWrapper>
                            <Header />
                            <HeaderMobile />
                            <PageWrapper>{children}</PageWrapper>
                        </MarginWidthWrapper>
                    </main>
                </div>
            </body>
        </html>
    )
}
