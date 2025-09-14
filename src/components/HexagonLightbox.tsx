'use client'

import {motion, AnimatePresence} from 'framer-motion'
import Image from 'next/image'
import {useEffect} from 'react'
import {Button} from '@/components/ui/button'

type Item = {id: number; src: string; alt?: string}

export default function HexagonLightbox({
    items,
    open,
    index,
    onClose,
    onChangeIndex
}: {
    items: Item[]
    open: boolean
    index: number
    onClose: () => void
    onChangeIndex: (i: number) => void
}) {
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            // DOM KeyboardEvent
            if (!open) return
            if (e.key === 'ArrowRight')
                onChangeIndex((index + 1) % items.length)
            if (e.key === 'ArrowLeft')
                onChangeIndex((index - 1 + items.length) % items.length)
            if (e.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open, index, items.length, onChangeIndex, onClose])

    if (!items || items.length === 0) return null

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="backdrop"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
                    onClick={onClose}>
                    <motion.div
                        initial={{y: 20, opacity: 0, scale: 0.98}}
                        animate={{y: 0, opacity: 1, scale: 1}}
                        exit={{y: 20, opacity: 0, scale: 0.98}}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30
                        }}
                        className="relative max-w-4xl w-full rounded"
                        onClick={e => e.stopPropagation()}>
                        <div className="relative aspect-[4/3] bg-slate-900">
                            <Image
                                src={items[index].src}
                                alt={items[index].alt || ''}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-white/90 text-sm">
                                {index + 1} / {items.length}
                            </div>

                            <div className="flex gap-2">
                                <Button
                                    variant="ghost"
                                    onClick={() =>
                                        onChangeIndex(
                                            (index - 1 + items.length) %
                                                items.length
                                        )
                                    }>
                                    Prev
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={() =>
                                        onChangeIndex(
                                            (index + 1) % items.length
                                        )
                                    }>
                                    Next
                                </Button>
                                <Button variant="ghost" onClick={onClose}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
