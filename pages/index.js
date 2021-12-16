import Layout from "../components/Layout";
import Header from "../components/Header";
import { Hero } from "../components/Hero";
import HeroCarousel from "../components/HeroCarousel";
import Carousel2 from "../components/Carousel2";
const Index = () => {
    return (
        <Layout pageTitle="SMP Negeri 33 Suabaya">
            <Header />
            {/* <Hero /> */}
            {/* <HeroCarousel /> */}
            <Carousel2 />
        </Layout>
    )
}
export default Index;