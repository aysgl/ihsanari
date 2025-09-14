'use client'
import HexagonGrid from '@/components/HexagonGrid'
import Title from '@/components/Title'

const images = Array.from({length: 5}).map((_, i) => ({
    id: i + 1,
    src: `https://peacefulqode.co.in/themes/melipona/html/images/Gallery/galley-img-${
        (i % 5) + 1
    }.jpg`,
    alt: `Gallery ${i + 1}`
}))

export default function Gallery() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="mb-12">
                <Title
                    className="text-center"
                    subTitle="Gallery"
                    title="Our Hive &amp; Honey Collection"
                    description="A collection of photos from our apiaries, honey extraction and product shots."
                />
            </div>

            <HexagonGrid items={images} />
        </div>
    )
}
