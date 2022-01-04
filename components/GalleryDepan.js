import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';

const GalleryDepan = ({ galleries }) => {

    const [largeImages, setLargeImages] = useState([])
    const [types, setTypes] = useState([])
    const [captions, setCaptions] = useState([])
    const [galIndex, setGalIndex] = useState(0)
    const [showLightbox, setShowLightbox] = useState(false)
    const [data, setData] = useState([])



    useEffect(() => {
        if (galleries) {
            let arrays = galleries.map(item => item.image_large)
            let arrays2 = galleries.map(item => item.type === 'video' ? 'youtube' : null)
            let arrays3 = galleries.map(item => item.title)
            setLargeImages(arrays)
            setTypes(arrays2)
            setCaptions(arrays3)
        }
    }, [galleries])

    const openLightbox = (index) => {
        setShowLightbox(!showLightbox)
        setGalIndex(index)
    }

    return (
        <section id="portfolio" className="portfolio">
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
                <h3 className="section-title-front cl-sec mb-4"><Link href={`/gallery`}><a><i className="bi bi-calendar-check"></i> Galeri Kegiatan</a></Link></h3>
                <div className="row gy-4 portfolio-container galleries-ku" data-aos="fade-up" data-aos-delay="200">
                    {galleries?.map((item, key) => {

                        return (
                            <div
                                onClick={() => openLightbox(key)}
                                className="col-lg-3 col-md-6 col-sm-6 portfolio-item filter-app" key={key}>
                                <div className="portfolio-wrap">
                                    <div className="img-fluid">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            layout='fill'
                                            objectFit='cover' />
                                        {item.type === 'video' ? <span className="yt-play"><i class="bi bi-youtube"></i></span> : ""}
                                    </div>
                                    {/* <img src="images/portfolio/p1.jpg" className="img-fluid" alt="" /> */}
                                    <div className="portfolio-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        {/* <div className="portfolio-links">
                                            <a href="images/portfolio/p1.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                        )
                    })}


                    {/* <div className="col-lg-3 col-md-6 col-sm-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="images/portfolio/p2.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="images/portfolio/p2.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="images/portfolio/p3.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 2</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a href="images/portfolio/p3.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="images/portfolio/p4.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Card 2</h4>
                                <p>Card</p>
                                <div className="portfolio-links">
                                    <a href="images/portfolio/p4.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 2"><i className="bi bi-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="images/portfolio/p5.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 2</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="images/portfolio/p5.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 2"><i className="bi bi-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="images/portfolio/p6.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 3</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a href="images/portfolio/p6.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 3"><i className="bi bi-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="images/portfolio/p7.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Card 1</h4>
                                <p>Card</p>
                                <div className="portfolio-links">
                                    <a href="images/portfolio/p7.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 1"><i className="bi bi-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="images/portfolio/p8.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Card 3</h4>
                                <p>Card</p>
                                <div className="portfolio-links">
                                    <a href="images/portfolio/p8.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 3"><i className="bi bi-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="col-lg-3 col-md-6 col-sm-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="images/portfolio/p9.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="images/portfolio/p9.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
            {/* {showLightbox && (
                <Lightbox
                    mainSrc={largeImages[galIndex]}
                    nextSrc={largeImages[(galIndex + 1) % largeImages.length]}
                    prevSrc={largeImages[(galIndex + largeImages.length - 1) % largeImages.length]}
                    onCloseRequest={() => setShowLightbox(false)}
                    onMovePrevRequest={() =>
                        setGalIndex((galIndex + largeImages.length - 1) % largeImages.length)
                    }
                    onMoveNextRequest={() =>
                        setGalIndex((galIndex + 1) % largeImages.length)
                    }
                />
                <ReactImageVideoLightbox
                    data={data}
                    startIndex={galIndex}
                    showResourceCount={true}
                    onCloseCallback={() => setShowLightbox(false)}
                    onNavigationCallback={(currentIndex) =>
                        console.log(`Current index: ${currentIndex}`)
                    }
                />
            )} */}
        </section>
    )
}

export default GalleryDepan
