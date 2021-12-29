import React, { useEffect } from 'react'
import AOS from 'aos';
import Link from 'next/link'
import Image from 'next/image'
const Sambutan = ({ sambutan }) => {
    useEffect(() => {
        AOS.init({
            duration: 300
        });
    }, []);

    return (
        <section id="about" className="about">

            {/* <div className="container" data-aos="fade-up"> */}
            <div className="container">
                <div className="row gx-0">

                    {/* <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200"> */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="content">
                            <h3 className="cl-sec">Sambutan kepala sekolah</h3>
                            <h2 className="cl-prim">{sambutan.title}</h2>
                            <p>{sambutan.excerpt}</p>
                            <div className="text-center text-lg-start">
                                <Link href={`/${sambutan.slug}`}>
                                    <a className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Baca selengkapnya</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200"> */}
                    <div className="col-lg-6 d-flex align-items-center">
                        <div style={{ width: '100%', height: '100%', position: 'relative' }}
                            className="img-thumbnail">
                            <Image
                                src={sambutan.image}
                                alt={sambutan.title}
                                // layout="fill"
                                // width={'100%'}
                                // height={'auto'}
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default Sambutan
