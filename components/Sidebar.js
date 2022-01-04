import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = ({ latest, sub, sidebarTitle }) => {
    return (
        <div className="sidebar" >
            <h3 className="sidebar-title">{sidebarTitle}</h3>
            <div className="sidebar-item recent-posts">
                {
                    latest.map((item, key) => {
                        const tanggal = item.created_at.split("T")[0]
                        return (
                            <div className="post-item clearfix" key={key}>
                                {/* <img src="assets/img/blog/blog-recent-1.jpg" alt=""> */}
                                <div className="img">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout='fill'
                                        objectFit='cover'
                                    />
                                </div>
                                <h4><Link href={`/${sub}/${item.slug}`}><a>{item.title}</a></Link></h4>
                                <time dateTime={tanggal}>{tanggal}</time>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Sidebar
