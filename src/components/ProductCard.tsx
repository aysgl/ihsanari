import Image from 'next/image'
import {Card, CardContent} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {ShoppingCart} from 'lucide-react'

export function ProductCard({
    product
}: {
    product: {
        id: number
        title: string
        price: string
    }
}) {
    return (
        <Card className="shadow-none border-none group relative overflow-hidden">
            <div className="relative aspect-3/4 bg-slate-50">
                <Image
                    src={`https://peacefulqode.co.in/themes/melipona/html/images/shop/shop-${
                        (product.id % 4) + 1
                    }.jpg`}
                    alt={product.title}
                    fill
                    className="object-cover h-full w-full rounded-md"
                />

                {/* Hover’da çıkan buton */}
                <div className="absolute inset-0 flex items-end justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="m-3 w-[90%]">
                        Sepete Ekle
                        <ShoppingCart className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            <CardContent className="p-0 text-center">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-xl mt-2 text-primary font-bold">
                    {product.price}₺
                </p>
            </CardContent>
        </Card>
    )
}
