'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'
import {cn} from '@/lib/utils'

type HexagonProps = {
    src: string
    alt?: string
    size?: number // pixel width
    onClick?: () => void
    className?: string
}

export default function Hexagon({
    src,
    alt = '',
    size = 180,
    className,
    onClick
}: HexagonProps) {
    // hexagon clip-path: regular hexagon (horizontal)
    const clipPath = `polygon(
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%,
    0% 50%
  )`

    return (
        <motion.div
            onClick={onClick}
            layout
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="cursor-pointer"
            style={{width: size, minWidth: size}}>
            <div
                className={cn(
                    'relative overflow-hidden rounded-none',
                    className
                )}
                style={{
                    width: '100%',
                    paddingTop: `${100}%` // square container; we'll clip into hex
                }}>
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath,
                        WebkitClipPath: clipPath,
                        transform: 'translateY(-0.5%)' // tiny visual tweak
                    }}>
                    <motion.div
                        variants={{
                            rest: {scale: 1},
                            hover: {scale: 1.04}
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20
                        }}
                        className="absolute inset-0">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover w-full h-full"
                            sizes={`${size}px`}
                        />
                        {/* overlay on hover */}
                        <motion.div
                            variants={{
                                rest: {opacity: 0},
                                hover: {opacity: 1}
                            }}
                            transition={{duration: 0.18}}
                            className="absolute inset-0 bg-black/35 flex items-center justify-center">
                            <div className="text-white text-sm font-semibold px-3 py-1 rounded backdrop-blur-sm">
                                View
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
