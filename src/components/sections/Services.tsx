'use client'

import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
    CardAction
} from '@/components/ui/card'
import Bee from '../../../public/svg/Bee'
import Title from '../Title'
import Link from 'next/link'
import {Button} from '../ui/button'
import {motion} from 'framer-motion'

const MotionCard = motion(Card)

const services = [
    {
        id: 1,
        title: 'Arıcılık Danışmanlığı',
        description:
            'Deneyimli ekibimizle arıcılık konusunda profesyonel danışmanlık hizmeti sunuyoruz.',
        image: '/images/service1.png'
    },
    {
        id: 2,
        title: 'Bal Üretimi',
        description:
            'Doğal yöntemlerle ürettiğimiz yüksek kaliteli balları sizlere sunuyoruz.',
        image: '/images/service2.png'
    },
    {
        id: 3,
        title: 'Arı Ekipmanları Satışı',
        description:
            'Arıcılıkla ilgili tüm ekipmanları uygun fiyatlarla satışa sunuyoruz. Arıcılıkla ilgili tüm ekipmanları uygun fiyatlarla satışa sunuyoruz.',
        image: '/images/service3.png'
    },
    {
        id: 4,
        title: 'Organik Bal Satışı',
        description:
            'Kendi ürettiğimiz organik balları güvenle temin edebilirsiniz.',
        image: '/images/service4.png'
    }
]

const iconVariants = {
    initial: {y: 0},
    hover: {y: -10}
}

export default function Services() {
    return (
        <section className="py-20 bg-slate-400/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 relative">
                <div className="sticky top-0 md:w-1/3">
                    <Title
                        subTitle="Service"
                        title="We Provide Premium Class Services"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                    />
                </div>

                {/* Sağ: 2 Sütunlu Masonry Grid */}
                <div className="md:w-2/3 columns-1 sm:columns-2 gap-8">
                    {services.map((service, i) => (
                        <MotionCard
                            key={i}
                            className="shadow-none border-none mb-8 break-inside-avoid"
                            initial="initial"
                            whileHover="hover">
                            <CardContent>
                                <div className="relative flex items-start mt-5">
                                    <motion.div
                                        variants={iconVariants}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 15
                                        }}>
                                        <div className="hexagon mb-4 bg-primary">
                                            <Bee className="w-22 h-20 text-white p-4" />
                                        </div>
                                    </motion.div>
                                </div>
                                <CardTitle className="text-2xl font-bold leading-relaxed mb-4">
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                                    {service.description}
                                </CardDescription>
                                <CardAction className="md:mt-16 mt-8">
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="font-bold">
                                        <Button variant={'ghost'} size={'lg'}>
                                            Learn More
                                            <Bee width={30} height={30} />
                                        </Button>
                                    </Link>
                                </CardAction>
                            </CardContent>
                        </MotionCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
