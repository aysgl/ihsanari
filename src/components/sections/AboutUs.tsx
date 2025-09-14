'use client'

import Image from 'next/image'
import Link from 'next/link'
import {Button} from '../ui/button'
import Bee from '../../../public/svg/Bee'
import Title from '../Title'
import BeeClose from '../../../public/svg/BeeClose'
import BeeOpen from '../../../public/svg/BeeOpen'
import MoreButton from '../MoreButton'

export default function AboutUs() {
    const images = [
        {
            src: 'https://peacefulqode.co.in/themes/melipona/html/images/About-us/about-img-1.jpg',
            alt: 'About Us Image 1',
            className: 'style-1'
        },

        {
            src: 'https://peacefulqode.co.in/themes/melipona/html/images/About-us/about-img-2.jpg',
            alt: 'About Us Image 2',
            className: 'style-2'
        },

        {
            src: 'https://peacefulqode.co.in/themes/melipona/html/images/About-us/about-img-3.jpg',
            alt: 'About Us Image 3',
            className: 'style-3'
        }
    ]
    return (
        <section id="about-us" className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative md:w-110 md:h-110 w-90 h-80">
                        {images.map(image => (
                            <div
                                className={`hexagon absolute ${image.className}`}
                                key={image.alt}>
                                <Image
                                    src={image.src}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Text */}
                <div className="lg:w-1/2 space-y-6">
                    <Title
                        subTitle="About Us"
                        title="We Are On Your Mind And Your Test Buds"
                        description="İhsan Arıcılık is a family owned beekeeping & honey shop dedicated to providing the purest and most natural honey products. With years of tradition and passion behind every jar, we believe in quality, sustainability, and the connection between nature and nourishment."
                    />

                    <MoreButton />
                </div>
            </div>
        </section>
    )
}
