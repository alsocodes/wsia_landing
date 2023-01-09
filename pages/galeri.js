import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import AOS from "aos";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import Pagination from "../components/Pagination";

const Index = ({ menu, general, galleries, page }) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);

  const [largeImages, setLargeImages] = useState([]);
  const [types, setTypes] = useState([]);
  const [captions, setCaptions] = useState([]);
  const [galIndex, setGalIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    if (galleries.rows) {
      let arrays = galleries.rows.map((item) => item.image_large);
      let arrays2 = galleries.rows.map((item) =>
        item.type === "video" ? "youtube" : null
      );
      let arrays3 = galleries.rows.map((item) => item.title);
      setLargeImages(arrays);
      setTypes(arrays2);
      setCaptions(arrays3);
    }
  }, [galleries]);

  const openLightbox = (index) => {
    setShowLightbox(!showLightbox);
    setGalIndex(index);
  };

  return (
    <Layout
      pageTitle={`Galeri Foto/Video Kegiataan Sekolah | ${general.organization}`}
    >
      <Header general={general} menus={menu?.main} />
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link href={`/`}>Beranda</Link>
              </li>
              <li>Galeri Foto/Video Kegiatan Sekolah</li>
            </ol>
            <h2>Galeri Foto/Video Kegiatan Sekolah</h2>
          </div>
        </section>
        <section id="portfolio" className="portfolio gallery-page">
          <FsLightbox
            type="image"
            types={types}
            captions={captions}
            sourceIndex={galIndex}
            toggler={showLightbox}
            sources={largeImages}
            initialAnimation="scale-in-long"
            slideChangeAnimation="scale-in"
          />
          <div className="container" data-aos="fade-up">
            <div
              className="row gy-4 portfolio-container galleries-ku"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {galleries?.rows.map((item, key) => {
                return (
                  <div
                    onClick={() => openLightbox(key)}
                    className="col-lg-4 col-md-6 col-sm-6 portfolio-item filter-app"
                    key={key}
                  >
                    <div className="portfolio-wrap">
                      <div className="img-fluid">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                        />
                        {item.type === "video" ? (
                          <span className="yt-play">
                            <i className="bi bi-youtube"></i>
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="portfolio-info">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            <Pagination total_page={galleries.total_page} page={page} />
          </div>
        </section>
      </main>
      <Footer
        menu_bottom_1={menu["bottom-1"]}
        menu_bottom_2={menu["bottom-2"]}
        general={general}
      />
    </Layout>
  );
};

// This gets called on every request
export const getServerSideProps = async ({ query }) => {
  // Fetch data from external API
  const res = await fetch(
    `https://eipiai.smpn33-sby.sch.id/public/general?data=general,menu`
  );
  const resJson = await res.json();
  const public_data = resJson.result;

  const page = query.page ? parseInt(query.page) : 1;
  const res1 = await fetch(
    `https://eipiai.smpn33-sby.sch.id/public/galleries?page_size=12&page=${page}`
  );
  const resJson1 = await res1.json();
  const galleries = resJson1.result;

  const general = public_data.general;
  const menu = public_data.menu;

  return { props: { general, menu, galleries, page } };
};

export default Index;
