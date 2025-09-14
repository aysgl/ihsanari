'use client'
import {useState, useCallback} from 'react'
import HexagonLightbox from './HexagonLightbox'
import Image from 'next/image'

type Item = {
    id: number
    src: string
    alt?: string
}

export default function HexagonGrid({items}: {items: Item[]}) {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)

    const onOpen = useCallback((i: number) => {
        setIndex(i)
        setOpen(true)
    }, [])

    const hexSize = 270
    const hexHeight = (hexSize * Math.sqrt(3)) / 2
    const verticalOffset = hexHeight / 2
    const gap = hexSize * 0.1

    return (
        <div className="container overflow-x-auto mx-auto flex justify-between items-center">
            <div
                className="relative"
                style={{height: `${hexHeight + verticalOffset}px`}}>
                {items.map((item, i) => {
                    const left = i * (hexSize - gap)
                    const top = i % 2 === 1 ? verticalOffset : 0
                    return (
                        <div
                            key={item.id}
                            className="hexagon cursor-pointer absolute"
                            style={{
                                width: `${hexSize}px`,
                                height: `${hexHeight}px`,
                                top: `${top}px`,
                                left: `${left}px`,
                                overflow: 'hidden',
                                position: 'absolute'
                            }}
                            onClick={() => onOpen(i)}>
                            <Image
                                src={item.src}
                                alt={item.alt ?? ''}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )
                })}
            </div>

            <HexagonLightbox
                items={items}
                open={open}
                index={index}
                onClose={() => setOpen(false)}
                onChangeIndex={i => setIndex(i)}
            />
        </div>
    )
}
