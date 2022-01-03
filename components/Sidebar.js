import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = ({ latest }) => {
    return (
        <div className="sidebar" >
            <h3 className="sidebar-title">Terbaru</h3>
            <div class="sidebar-item recent-posts">
                {
                    latest.map((item, key) => {
                        const tanggal = item.created_at.split("T")[0]
                        return (
                            <div class="post-item clearfix">
                                {/* <img src="assets/img/blog/blog-recent-1.jpg" alt=""> */}
                                <div className="img">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout='fill'
                                        objectFit='cover'
                                    />
                                </div>
                                <h4><a href="blog-single.html">{item.title}</a></h4>
                                <time datetime={tanggal}>{tanggal}</time>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Sidebar
