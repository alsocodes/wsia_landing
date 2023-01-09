import React, { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Link from "next/link";
import Blogs from "../components/Blogs";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import AOS from "aos";

const Index = ({ general, menu, post }) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);
  return (
    <Layout pageTitle={`Agenda Kegiatan Sekolah | ${general.organization}`}>
      <Header general={general} menus={menu?.main} />
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link href={`/`}>Beranda</Link>
              </li>
              <li>Agenda</li>
            </ol>
            <h2>Agenda Kegiatan Sekolah</h2>
          </div>
        </section>

        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8 entries">
                <Blogs sub="agenda" post={post} />
              </div>
              <div className="col-lg-4">
                <Sidebar
                  sidebarTitle="Agenda Terdekat"
                  sub="agenda"
                  latest={post.latest}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer
        menu_bottom_1={menu["bottom-1"]}
        menu_bottom_2={menu["bottom-2"]}
        general={general}
      />
    </Layout>
  );
};

// This gets called on every request
export const getServerSideProps = async ({ query }) => {
  // Fetch data from external API
  const res = await fetch(
    `https://eipiai.smpn33-sby.sch.id/public/general?data=general,menu`
  );
  const resJson = await res.json();
  const public_data = resJson.result;

  const page = query.page ? query.page : 1;

  const res1 = await fetch(
    `https://eipiai.smpn33-sby.sch.id/public/posts?type=agenda&page_size=10&page=${page}`
  );
  const resJson1 = await res1.json();
  const post = resJson1.result;

  const general = public_data.general;
  const menu = public_data.menu;

  return { props: { general, menu, post } };
};

export default Index;
