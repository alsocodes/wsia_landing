import Layout from "../components/Layout";
import Header from "../components/Header";
import Carousel2 from "../components/Carousel2";
import Sambutan from "../components/Sambutan";
import Tagline from "../components/Tagline";
import LatestNews from "../components/LatestNews";
import Agenda from "../components/Agenda";
import GalleryDepan from "../components/GalleryDepan";
import Footer from "../components/Footer";
const Index = () => {
    return (
        <Layout pageTitle="SMP Negeri 33 Suabaya">
            <Header />
            {/* <Hero /> */}
            {/* <HeroCarousel /> */}
            <Carousel2 />
            <Sambutan />
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
export default Index;