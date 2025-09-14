'use client'

import {FC} from 'react'
import Image from 'next/image'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Mail, MapPin, Phone} from 'lucide-react'

const instagramImages = [
    '/slides/slide1.jpg',
    '/slides/slide2.jpg',
    '/slides/slide3.jpg',
    '/slides/slide2.jpg',
    '/slides/slide3.jpg',
    '/slides/slide1.jpg'
]

const Footer: FC = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto">
                <div className="flex flex-row items-center gap-4 mb-10">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-slate-500">
                            Sign Up To The Latest News
                        </h3>
                        <p className="text-3xl max-w-md font-bold mb-4">
                            Latest Updates Subscribe To Our Newsletter
                        </p>
                    </div>
                    <div className="flex-1 gap-2">
                        <div className="flex flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 bg-white h-12"
                            />
                            <Button
                                size={'lg'}
                                className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto grid md:grid-cols-3 gap-8">
                {/* Newsletter */}

                {/* About Us */}
                <div>
                    <h3 className="text-xl font-bold mb-4">About Us</h3>
                    <p className="leading-8">
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently.
                    </p>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <div className="flex flex-row gap-2 items-center leading-relaxed">
                        <MapPin className="size-4" /> 1095 Howard Street, San
                        Francisco, USA
                    </div>
                    <div className="flex flex-row gap-2 items-center leading-relaxed">
                        <Phone className="size-4" /> +91 8899 665 555
                    </div>
                    <div className="flex flex-row gap-2 items-center leading-relaxed">
                        <Mail className="size-4" /> info@peacefulqode.com
                    </div>
                </div>

                {/* Instagram Gallery */}
                <div>
                    <h3 className="text-xl font-bold mb-4">
                        Instagram Gallery
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                        {instagramImages.map((src, i) => (
                            <div key={i} className="w-full h-20 relative">
                                <Image
                                    src={src}
                                    alt={`Instagram ${i + 1}`}
                                    fill
                                    className="object-cover rounded-sm"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
                Copyright 2023 Opticeye All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer
