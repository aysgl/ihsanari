'use client'

import {Search, ShoppingCart} from 'lucide-react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="container mx-auto bg-white/40 rounded-lg  backdrop-blur-3xl fixed top-0 left-0 right-0 z-50 my-3">
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    İhsan Arıcılık
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/">Home</Link>
                    <Link href="/">Pages</Link>
                    <Link href="/">Products</Link>
                    <Link href="/">Portfolio</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Contact Us</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button aria-label="Search">
                        <Search size={18} />
                    </button>
                    <button aria-label="Cart" className="relative">
                        <ShoppingCart size={18} />
                        <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full px-1">
                            2
                        </span>
                    </button>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                        Contact Us
                    </Button>
                </div>
            </div>
        </header>
    )
}
