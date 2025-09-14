'use client'

import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import Bee from '../../../public/svg/Bee'
import {Card, CardContent, CardDescription, CardTitle} from '../ui/card'

type CounterProps = {
    end: number
    suffix?: string
    duration?: number
}

function Counter({end, suffix = '', duration = 2}: CounterProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const increment = end / (duration * 60) // 60fps varsayımı
        const interval = setInterval(() => {
            start += increment
            if (start >= end) {
                start = end
                clearInterval(interval)
            }
            setCount(Math.floor(start))
        }, 1000 / 60)

        return () => clearInterval(interval)
    }, [end, duration])

    return (
        <span>
            {count.toLocaleString()} {suffix}
        </span>
    )
}

export default function Stats() {
    const stats = [
        {id: 1, value: 200000, label: 'Amazing Projects Done', suffix: 'k'},
        {id: 2, value: 3000, label: 'Hectares of Fields'},
        {id: 3, value: 1275, label: 'Bee Families'},
        {id: 4, value: 14000000, label: 'Bee Hives', suffix: 'm'}
    ]

    const iconVariants = {
        initial: {y: 0},
        hover: {y: -10}
    }

    const MotionCard = motion(Card)

    return (
        <section className="py-16 bg-primary mt-20">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map(stat => (
                    <MotionCard
                        key={stat.id}
                        className="shadow-none border-none bg-transparent break-inside-avoid text-center"
                        initial="initial"
                        whileHover="hover">
                        <CardContent className="flex flex-col justify-center items-center mx-auto">
                            <motion.div
                                variants={iconVariants}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 15
                                }}>
                                <div className="hexagon mb-4 bg-white">
                                    <Bee className="w-32 h-28 text-primary p-6" />
                                </div>
                            </motion.div>
                            <CardTitle className="text-4xl font-bold leading-relaxed text-white">
                                <Counter
                                    end={stat.value}
                                    suffix={stat.suffix}
                                />
                            </CardTitle>
                            <CardDescription className="text-xl font-bold leading-relaxed text-white">
                                {stat.label}
                            </CardDescription>
                        </CardContent>
                    </MotionCard>
                ))}
            </div>
        </section>
    )
}
