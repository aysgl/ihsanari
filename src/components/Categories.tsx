'use client'

import * as React from 'react'
import Bee from '../../public/svg/Bee'
import {HexagonGrid} from './HexagonGrid'

const categories = [
    'Diğer Arıcılık Malzemeleri',
    'Ana Arı Yetiştirme',
    'Arı Sağlığı',
    'Arı Sütü ve Propolis',
    'Arı Yemleri',
    'Bal',
    'Polen',
    'Polen Toplama ve Kurutma',
    'Sır Alma Ekipmanları',
    'Bal Süzme Makineleri',
    'Manuel Bal Süzme Makineleri',
    'Otomatik Motorlu Bal Süzme Makineleri',
    'Kovan & Kovan Ekipmanları',
    'Çerçeveler',
    'Kovanlar',
    'Bal İşleme ve Dolum',
    'Bal Eritme',
    'Dinlendirme Kazanları',
    'Arıcılık Malzemeleri',
    'Arıcılık Aletleri',
    'Arıcılık Körükleri',
    'Öne Çıkan',
    'Bal Süzgeçleri',
    'Koruyucu Kıyafeter',
    'Temel Petek Çeşitleri',
    'Yeni',
    'Yemlikler'
]

export default function Categories() {
    return (
        <div className="relative h-screen w-full">
            <HexagonGrid
                hexagonSize={75}
                hexagonMargin={3}
                className="absolute inset-0">
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Engineering Dashboard
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Precision by design
                        </p>
                    </div>
                </div>
            </HexagonGrid>
        </div>
    )
}
