'use client'

import {useState, useEffect, useRef} from 'react'

type Item = {
    id: number
    name?: string
    hexSize?: number
}

export default function HexagonGrid({
    items,
    hexSize = 270
}: {
    items: Item[]
    hexSize?: number
}) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [positions, setPositions] = useState<{left: number; top: number}[]>(
        []
    )
    const [containerHeight, setContainerHeight] = useState(0)
    const [hexOpacities, setHexOpacities] = useState<number[]>([])

    const hexHeight = (hexSize * Math.sqrt(3)) / 2
    const horizontalGap = 20
    const verticalGap = 10
    const spacingX = hexSize * 1.5 + horizontalGap
    const verticalOffset = hexHeight * 0.5 + verticalGap

    useEffect(() => {
        const opacities = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
        const randoms = items.map(
            () => opacities[Math.floor(Math.random() * opacities.length)]
        )
        setHexOpacities(randoms)
    }, [items])

    const computeLayout = () => {
        const container = containerRef.current
        if (!container) return
        const width = container.clientWidth || 0
        if (width <= 0) return

        const rowCapacity = Math.max(1, Math.floor(width / spacingX))
        const positionsTemp: {left: number; top: number}[] = []

        let curRow = 0
        let curCol = 0

        for (let i = 0; i < items.length; i++) {
            const offset = curRow % 2 === 1 ? spacingX / 2 : 0
            const left = curCol * spacingX + offset
            const top = curRow * verticalOffset

            positionsTemp.push({left, top})

            curCol++
            if (curCol >= rowCapacity) {
                curRow++
                curCol = 0
            }
        }

        const totalRows = curRow + (curCol > 0 ? 1 : 0)
        const finalHeight = hexHeight + (totalRows - 1) * verticalOffset

        setPositions(positionsTemp)
        setContainerHeight(finalHeight)
    }

    useEffect(() => {
        computeLayout()
        const ro = new ResizeObserver(() => computeLayout())
        if (containerRef.current) ro.observe(containerRef.current)
        window.addEventListener('resize', computeLayout)
        return () => {
            ro.disconnect()
            window.removeEventListener('resize', computeLayout)
        }
    }, [items, hexSize])

    return (
        <div className="container mx-auto z-50 -mt-35">
            <div
                ref={containerRef}
                className="relative"
                style={{height: `${containerHeight}px`}}>
                {items.map((item, i) => {
                    const pos = positions[i] ?? {left: 0, top: 0}
                    const opacity = hexOpacities[i] ?? 0.8 // Default for SSR
                    return (
                        <div
                            key={item.id}
                            className="cursor-pointer absolute backdrop-blur-xl"
                            style={{
                                width: `${hexSize}px`,
                                height: `${hexHeight}px`,
                                top: `${pos.top}px`,
                                left: `${pos.left}px`,
                                backgroundColor: `rgba(255,182,6,${opacity})`,
                                clipPath:
                                    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' // Add shadow here
                            }}>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center text-sm p-2">
                                {item.name ?? ''}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
