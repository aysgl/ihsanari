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
import {motion} from 'framer-motion'
import MoreButton from '../MoreButton'

const MotionCard = motion(Card)

const services = [
    {
        id: 1,
        title: 'Arıcılık Malzemeleri',
        description:
            'Arıcılıkla ilgili tüm araç-gereçleri, aletleri ve körükleri uygun fiyatlarla temin edebilirsiniz.'
    },
    {
        id: 2,
        title: 'Ana Arı ve Arı Sağlığı',
        description: 'Ana arı yetiştirme, arı sağlığı ve propolis ürünleri.'
    },
    {
        id: 3,
        title: 'Bal ve Bal İşleme',
        description:
            'Bal işleme ve dolum makineleri, manuel ve otomatik süzme makineleri hizmetinizde.'
    },
    {
        id: 4,
        title: 'Polen ve Ürünleri',
        description:
            'Organik polen ve polen toplama/kurutma makineleri ile arıcılık ürünleri.'
    },
    {
        id: 5,
        title: 'Kovan ve Kovan Ekipmanları',
        description:
            'Kovan, çerçeve, temel petek çeşitleri, sır alma ekipmanları ve yemlikler.'
    },
    {
        id: 6,
        title: 'Koruyucu Ekipman',
        description:
            'Arıcılık sırasında güvenliğiniz için koruyucu kıyafet ve ekipmanlar.'
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
                                    <MoreButton
                                        variant={'ghost'}
                                        href={`/services/${service.id}`}
                                    />
                                </CardAction>
                            </CardContent>
                        </MotionCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
