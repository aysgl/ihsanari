import {ProductCard} from './ProductCard'
import Title from './Title'

export default function ProductGrid() {
    const products = new Array(8).fill(null).map((_, i) => ({
        id: i + 1,
        title: `Saf Bal ${i + 1}`,
        price: (55 + i * 10).toFixed(0)
    }))

    return (
        <div className="container mx-auto mt-8">
            <Title
                title="Kinds Of Organic Honey"
                subTitle="Our Fine Product"
                className="text-center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {products.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    )
}
