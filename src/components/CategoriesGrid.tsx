'use client'
import {useState, useCallback, useEffect} from 'react'
import HexagonLightbox from './HexagonLightbox'
import Image from 'next/image'

type Item = {
    id: number
    name?: string
    src?: string
    alt?: string
}

export default function CategoriesGrid({items}: {items: Item[]}) {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const [columns, setColumns] = useState(5) // default 5 hex per row

    const onOpen = useCallback((i: number) => {
        setIndex(i)
        setOpen(true)
    }, [])

    // Responsive columns
    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth
            if (w < 768) setColumns(2)
            else if (w < 1024) setColumns(4)
            else setColumns(5)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const hexSize = 240
    const hexHeight = (hexSize * Math.sqrt(3)) / 2
    const verticalOffset = hexHeight / 2

    return (
        <div className="w-full overflow-x-auto">
            <div
                className="flex justify-center gap-[-60px] relative"
                style={{height: `${hexHeight + verticalOffset}px`}}>
                {items.map((item, i) => (
                    <div
                        key={item.id}
                        className="hexagon cursor-pointer bg-primary flex items-center justify-center"
                        style={{
                            width: `${hexSize}px`,
                            height: `${hexHeight}px`,
                            marginTop:
                                i % 2 === 1 ? `${verticalOffset}px` : '0',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                        onClick={() => onOpen(i)}>
                        <p className="text-white font-bold">
                            {item.name ?? ''}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
