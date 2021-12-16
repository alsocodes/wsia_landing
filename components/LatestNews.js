import React from 'react'

const LatestNews = () => {
    return (
        <div>
            <h3 className="cl-sec mb-4"><i className="bi bi-newspaper"></i> Informasi Terbaru</h3>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="post-box">
                        <div className="post-img"><img src="images/blog/blog-1.jpg" className="img-fluid" alt="" /></div>
                        <span className="post-date">Tue, September 15</span>
                        <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</h3>
                        <a href="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
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
                </div>
            </div>

        </div>
    )
}

export default LatestNews
