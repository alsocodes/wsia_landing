import React, { useEffect } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import AOS from 'aos';
import Link from 'next/link';
import Footer from '../components/Footer';

const Index = ({ menu, general, s }) => {
    useEffect(() => {
        AOS.init({
            duration: 300
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

            </main>
            <Footer />
        </Layout>
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
    const s = query.s
    const page = query.page ? query.page : 1

    const res1 = await fetch(`http://localhost:3007/public/posts/search?search=${s}&page_size=10&page=${page}`)
    const resJson1 = await res1.json()
    const posts = resJson1.result

    return { props: { general, menu, s } }
}


export default Index
