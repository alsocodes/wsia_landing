import Layout from "../components/Layout";
import Header from "../components/Header";
import Carousel2 from "../components/Carousel2";
import Sambutan from "../components/Sambutan";
import Tagline from "../components/Tagline";
import LatestNews from "../components/LatestNews";
import Agenda from "../components/Agenda";
import GalleryDepan from "../components/GalleryDepan";
import Footer from "../components/Footer";
import CarouselMain from "../components/CarouselMain";

const Index = ({ general, menu, slides, sambutan }) => {
    console.log('aaa', slides);
    return (
        <Layout pageTitle="SMP Negeri 33 Suabaya">
            <Header
                general={general}
                menus={menu?.main}
            />
            {/* <Hero /> */}
            {/* <HeroCarousel /> */}
            {/* <Carousel2 slides={slides} /> */}
            <CarouselMain slides={slides} />
            <Sambutan sambutan={sambutan} />
            <Tagline />
            <section>
                <div className="container">
                    <div className="row recent-blog-posts">
                        <div className="col-md-8 col-sm-12">
                            <LatestNews />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Agenda />
                        </div>
                    </div>
                </div>
            </section>
            <GalleryDepan />
            <Footer />
        </Layout>
    )
}

// This gets called on every request
export const getServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3007/public/general`)
    const resJson = await res.json()
    const public_data = resJson.result

    // const resMenu = await fetch(`http://localhost:3007/public/menus`)
    // const resJsonMenu = await resMenu.json()
    // const menu = resJsonMenu.result

    // // Fetch data from external API
    // const resSlide = await fetch(`http://localhost:3007/public/slides`)
    // const resJsonSlide = await resSlide.json()
    // const slides = resJsonSlide.result
    const general = public_data.general
    const menu = public_data.menu
    const slides = public_data.slides
    const sambutan = public_data.sambutan

    return { props: { general, menu, slides, sambutan } }
}

export default Index;