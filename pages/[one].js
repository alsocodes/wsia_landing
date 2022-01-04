import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import HtmlParser from 'react-html-parser'
import Image from 'next/image'
import Footer from "../components/Footer";
import AOS from 'aos';

const Index = ({ general, menu, one, post }) => {
    const router = useRouter()
    const tanggal = post.created_at.split('T')[0]
    const tags = post.tags.split(",")
    useEffect(() => {
        AOS.init({
            duration: 300
        });
    }, []);

    // const sidebarFrom = ['pengumuman']
    let sidebarTitle = 'Halaman lainnya';
    if (one === 'profil') sidebarTitle = 'Halaman Lainnya';
    if (one === 'pengumuman') sidebarTitle = 'Informasi Terbaru';
    if (one === 'agenda') sidebarTitle = 'Agenda Terbaru';
    if (one === 'artikel') sidebarTitle = 'Artikel Terbaru';

    return (
        <Layout pageTitle={`${post.title} | ${general.organization}`}>
            <Header
                general={general}
                menus={menu?.main}
            />
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <ol>
                            <li><Link href={`/`}>Beranda</Link></li>
                            <li>{one}</li>
                        </ol>
                        <h2>{post.title}</h2>
                    </div>
                </section>

                <section id="blog" className="blog" >
                    <div className="container" data-aos="fade-up" >
                        <div className="row" >
                            <div className="col-lg-8 entries" >
                                <article className="entry entry-single">
                                    <div className="entry-img">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            layout='fill'
                                            objectFit='cover'
                                        />
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="blog-single.html">{post.title}</a>
                                    </h2>

                                    <div className="entry-meta">
                                        <ul>
                                            <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">{post.user.name}</a></li>
                                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime={tanggal}>{tanggal}</time></a></li>
                                            {/* <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li> */}
                                        </ul>
                                    </div>

                                    <div className="entry-content">
                                        {HtmlParser(post.content)}
                                    </div>
                                    <div className="entry-footer">
                                        <i className="bi bi-folder"></i>
                                        <ul className="cats">
                                            <li><a href="#">{post.type}</a></li>
                                        </ul>

                                        <i className="bi bi-tags"></i> &nbsp;
                                        <ul className="tags">
                                            {
                                                tags.map((item, key) => {
                                                    return (
                                                        <li><a href="#">{item}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </article>

                            </div >
                            <div className="col-lg-4" >
                                <Sidebar sidebarTitle={sidebarTitle} sub={one} latest={post.latest} />
                            </div >
                        </div >
                    </div >
                </section >
            </main >
            <Footer />
        </Layout >
    )
}

// This gets called on every request
export const getServerSideProps = async ({ query }) => {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3007/public/general?data=general,menu`)
    const resJson = await res.json()
    const public_data = resJson.result

    const general = public_data.general
    const menu = public_data.menu
    const { one } = query

    const res1 = await fetch(`http://localhost:3007/public/post/${one}`)
    const resJson1 = await res1.json()
    const post = resJson1.result


    return { props: { general, menu, one, post } }
}


export default Index
