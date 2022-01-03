import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Link from 'next/link'
import Blogs from '../components/Blogs'
import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

const Index = ({ general, menu, post }) => {
    return (
        <Layout pageTitle={`Pengumuman, Berita, Informasi | ${general.organization}`}>
            <Header
                general={general}
                menus={menu?.main}
            />
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <ol>
                            <li><Link href={`/`}>Beranda</Link></li>
                            <li>Pengumuman</li>
                        </ol>
                        <h2>Pengumuman, Berita, Informasi</h2>
                    </div>
                </section>

                <section id="blog" className="blog" >
                    <div className="container" data-aos="fade-up" >
                        <div className="row" >
                            <div className="col-lg-8 entries" >
                                <Blogs post={post} />
                            </div >
                            <div className="col-lg-4" >
                                <Sidebar latest={post.latest} />
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

    const page = query.page ? query.page : 1

    const res1 = await fetch(`http://localhost:3007/public/posts?type=news&page_size=10&page=${page}`)
    const resJson1 = await res1.json()
    const post = resJson1.result

    const general = public_data.general
    const menu = public_data.menu

    return { props: { general, menu, post } }
}


export default Index
