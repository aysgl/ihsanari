'use client'

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {motion} from 'framer-motion'
import BeeOpen from '../../public/svg/BeeOpen'
import BeeClose from '../../public/svg/BeeClose'

export default function MoreButton({
    href = '/',
    children,
    variant = 'default'
}: {
    href?: string
    children?: React.ReactNode
    variant?: 'default' | 'ghost' | 'link' | 'outline' | 'secondary'
}) {
    const [hovered, setHovered] = useState(false)
    const [showOpen, setShowOpen] = useState(true)

    useEffect(() => {
        let interval: number
        if (hovered) {
            interval = window.setInterval(() => {
                setShowOpen(prev => !prev)
            }, 400)
        } else {
            setShowOpen(true)
        }
        return () => window.clearInterval(interval)
    }, [hovered])

    return (
        <Link href={href}>
            <Button
                variant={variant}
                size="lg"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="flex items-center gap-2 relative">
                {children || 'Learn More'}
                <motion.div
                    key={showOpen ? 'open' : 'close'}
                    className="w-6 h-6 relative"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3}}>
                    {showOpen ? (
                        <BeeOpen className="w-6 h-6" />
                    ) : (
                        <BeeClose className="w-6 h-6" />
                    )}
                </motion.div>
            </Button>
        </Link>
    )
}
