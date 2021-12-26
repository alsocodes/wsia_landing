import Layout from "../components/Layout";
import Header from "../components/Header";
import Carousel2 from "../components/Carousel2";
import Sambutan from "../components/Sambutan";
import Tagline from "../components/Tagline";
import LatestNews from "../components/LatestNews";
import Agenda from "../components/Agenda";
import GalleryDepan from "../components/GalleryDepan";
import Footer from "../components/Footer";

const Index = ({ general }) => {
    return (
        <Layout pageTitle="SMP Negeri 33 Suabaya">
            <Header general={general} />
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

// This gets called on every request
export const getServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3007/public/general`)
    const resJson = await res.json()
    const general = resJson.result

    // const data = {
    //     general.result
    // }

    // Pass data to the page via props
    // const data = { title: 'Halaman Utama' }
    return { props: { general } }
}

export default Index;