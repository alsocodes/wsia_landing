import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LatestNews = ({ news }) => {
    return (
        <div>
            <h3 className="cl-sec mb-4"><i className="bi bi-newspaper"></i> Informasi Terbaru</h3>
            <div className="row">
                {
                    news?.map((item, key) => {

                        return (
                            <div className="col-lg-6 mb-4">
                                <div className="post-box">
                                    <div className="post-img">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            layout='fill'
                                            objectFit='cover'
                                        />
                                        {/* <img src="images/blog/blog-1.jpg" className="img-fluid" alt="" /> */}
                                    </div>
                                    <span className="post-date">Tue, September 15</span>
                                    <h3 className="post-title">{item.title}</h3>
                                    <Link href={`/pengumuman/${item.slug}`}>
                                        <a className="readmore stretched-link mt-auto"><span>Baca</span><i className="bi bi-arrow-right"></i></a>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }

                {/* <div className="col-lg-6 mb-4">
                    <div className="post-box">
                        <div className="post-img"><img src="images/blog/blog-2.jpg" className="img-fluid" alt="" /></div>
                        <span className="post-date">Fri, August 28</span>
                        <h3 className="post-title">Et repellendus molestiae qui est sed omnis voluptates magnam</h3>
                        <a href="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                    <div className="post-box">
                        <div className="post-img"><img src="images/blog/blog-3.jpg" className="img-fluid" alt="" /></div>
                        <span className="post-date">Mon, July 11</span>
                        <h3 className="post-title">Quia assumenda est et veritatis aut quae</h3>
                        <a href="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="post-box">
                        <div className="post-img"><img src="images/blog/blog-3.jpg" className="img-fluid" alt="" /></div>
                        <span className="post-date">Mon, July 11</span>
                        <h3 className="post-title">Quia assumenda est et veritatis aut quae</h3>
                        <a href="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default LatestNews
