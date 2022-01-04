import React, { useEffect } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import AOS from 'aos';
import Link from 'next/link';
import Footer from '../components/Footer';
import Image from 'next/image'
import Pagination from '../components/Pagination'

const Index = ({ menu, general, s, posts, page }) => {
    useEffect(() => {
        AOS.init({
            duration: 300,
            once: true
        });
    }, []);

    return (
        <Layout pageTitle={`Pencarian : "${s}" | ${general.organization}`}>
            <Header
                general={general}
                menus={menu?.main}
            />
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><Link href={`/`}>Beranda</Link></li>
                            <li>Pencarian</li>
                        </ol>
                        <h2>Pencarian</h2>
                    </div>
                </section>
                <section id="blog" className="blog" >
                    <div className="container" data-aos="fade-up" >
                        <h3 className="section-title-front cl-sec mb-4">
                            Informasi Terbaru</h3>
                        <div className="search-results">
                            {
                                posts?.rows.map((item, key) => {
                                    const tanggal = item.created_at.split("T")[0]
                                    let sub = '';
                                    if (item.type === 'article') sub = '/artikel'
                                    if (item.type === 'agenda') sub = '/agenda'
                                    if (item.type === 'news') sub = '/pengumuman'

                                    return (
                                        <div className="post-item clearfix mb-2 p-3" key={key}>
                                            <div className="img img-thumbnail">
                                                <Link href={`${sub}/${item.slug}`}><a>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        layout='fill'
                                                        objectFit='cover'
                                                    />
                                                </a></Link>
                                            </div>
                                            <div className="text">
                                                <h4><Link href={`${sub}/${item.slug}`}><a>{item.title}</a></Link></h4>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li className="d-flex align-items-center"><i className="bi bi-person"></i>&nbsp; <a href="#">{item.user.name}</a></li>
                                                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i>&nbsp; <a href="#"><time dateTime={tanggal}>{tanggal}</time></a></li>
                                                        {/* <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li> */}
                                                    </ul>
                                                </div>
                                                <p>{item.excerpt}</p>
                                            </div>
                                            {/* <time dateTime={tanggal}>{tanggal}</time> */}
                                        </div>
                                    )
                                })
                            }
                        </div >
                    </div >
                    <div className="mt-4">
                        <Pagination total_page={posts.total_page} page={page} />
                    </div>
                </section >

            </main>
            <Footer />
        </Layout >
    )
}

// This gets called on every request
export const getServerSideProps = async ({ query }) => {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_URL}/public/general?data=general,menu`)
    const resJson = await res.json()
    const public_data = resJson.result

    const general = public_data.general
    const menu = public_data.menu
    const s = query.s
    const page = query.page ? parseInt(query.page) : 1

    const res1 = await fetch(`${process.env.API_URL}/public/posts/search?search=${s}&page_size=10&page=${page}`)
    const resJson1 = await res1.json()
    const posts = resJson1.result

    return { props: { general, menu, s, posts, page } }
}


export default Index
