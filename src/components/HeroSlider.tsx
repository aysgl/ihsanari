'use client'

import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {Button} from '@/components/ui/button'

const slides = [
    {
        id: 1,
        title: 'Pure Organic Honey',
        description:
            'Taste the natural sweetness harvested with care from our beehives.',
        image: '/images/slider1.jpg',
        buttonText: 'Shop Now'
    },
    {
        id: 2,
        title: 'Beekeeping & Nature',
        description:
            'Discover the tradition of beekeeping and enjoy fresh honey every day.',
        image: '/images/slider2.jpg',
        buttonText: 'Learn More'
    },
    {
        id: 3,
        title: 'Healthy & Delicious',
        description:
            'Our honey is 100% organic, rich in nutrients and perfect for your family.',
        image: '/images/slider3.jpg',
        buttonText: 'Explore Products'
    }
]

export default function HeroSlider() {
    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}
                    className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
                    style={{backgroundImage: `url(${slides[current].image})`}}
                    initial={{opacity: 0, scale: 1.05}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.8}}>
                    <div className="bg-black/40 w-full h-full flex items-center justify-center">
                        <div className="text-center text-white max-w-2xl px-4">
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold mb-4"
                                initial={{y: 30, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.2}}>
                                {slides[current].title}
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl mb-6"
                                initial={{y: 30, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.4}}>
                                {slides[current].description}
                            </motion.p>
                            <motion.div
                                initial={{y: 30, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.6}}>
                                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                                    {slides[current].buttonText}
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow">
                <ChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow">
                <ChevronRight />
            </button>
        </div>
    )
}
