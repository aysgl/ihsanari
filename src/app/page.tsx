import Header from '@/components/sections/Header'
import HeroSlider from '@/components/HeroSlider'
import AboutUs from '@/components/sections/AboutUs'
import ProductGrid from '@/components/ProductGrid'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Stats from '@/components/sections/Counter'
import ContactForm from '@/components/sections/ContactForm'
import Categories from '@/components/sections/Categories'
import Footer from '@/components/sections/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <HeroSlider />
            <Categories />
            <AboutUs />
            <Services />
            <ProductGrid />
            <Stats />
            <Gallery />
            <ContactForm />
            <Footer />
        </>
    )
}
