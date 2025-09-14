'use client'

import {
    Phone,
    Mail,
    Facebook,
    Twitter,
    Instagram,
    Search,
    ShoppingCart
} from 'lucide-react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full">
            {/* TopBar */}
            <div className="bg-black text-white text-sm">
                <div className="container mx-auto flex justify-between items-center px-4 py-2">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <Phone size={14} /> +90 555 444 33 22
                        </span>
                        <span className="flex items-center gap-2">
                            <Mail size={14} /> info@melipona.com
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="Facebook">
                            <Facebook size={16} />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <Twitter size={16} />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* MainNav */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto flex justify-between items-center px-4 py-4">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary">
                        Melipona
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/">Home</Link>
                        <Link href="/#">Pages</Link>
                        <Link href="/#">Products</Link>
                        <Link href="/#">Portfolio</Link>
                        <Link href="/#">Blog</Link>
                        <Link href="/#">Contact Us</Link>
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
            </div>
        </header>
    )
}
