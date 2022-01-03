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

const Index = ({ general, menu, slides, sambutan, headline, agenda, news }) => {
    console.log('aaa', slides);
    return (
        <Layout pageTitle={general.organization}>
            <Header
                general={general}
                menus={menu?.main}
            />
            <CarouselMain slides={slides} />
            <Sambutan sambutan={sambutan} />
            <Tagline headline={headline} />
            <section>
                <div className="container">
                    <div className="row recent-blog-posts">
                        <div className="col-md-8 col-sm-12">
                            <LatestNews news={news} />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Agenda agenda={agenda} />
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
    const res = await fetch(`http://localhost:3007/public/general?data=general,menu,slides,sambutan,headline,agenda,news`)
    const resJson = await res.json()
    const public_data = resJson.result

    const general = public_data.general
    const menu = public_data.menu
    const slides = public_data.slides
    const sambutan = public_data.sambutan
    const headline = public_data.headline
    const agenda = public_data.agenda
    const news = public_data.news

    return { props: { general, menu, slides, sambutan, headline, agenda, news } }
}

export default Index;