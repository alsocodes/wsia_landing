import React, { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import AOS from "aos";
import Link from "next/link";
import Footer from "../components/Footer";

const Index = ({ menu, general }) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <Layout pageTitle={`Hubungi kami | ${general.organization}`}>
      <Header general={general} menus={menu?.main} />
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link href={`/`}>Beranda</Link>
              </li>
              <li>Kontak</li>
            </ol>
            <h2>Kontak / Hubungi kami</h2>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            {/* <header className="section-header">
                            <h2>Contact</h2>
                            <p>Contact Us</p>
                        </header> */}

            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Alamat</h3>
                      <p>{general.address}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-telephone"></i>
                      <h3>No Telp</h3>
                      <p>{general.phone}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-envelope"></i>
                      <h3>Email</h3>
                      <p>{general.email}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-clock"></i>
                      <h3>Jam Operasional</h3>
                      <p>
                        Senin - Jumat
                        <br />
                        09.00 - 17.00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Nama Anda"
                        required
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Alamat email Anda"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Judul"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Pesan"
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="container border border-secondary mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5611274610037!2d112.69448051437116!3d-7.29066917368302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc6b4533d72d%3A0xff1374893133af5b!2sJunior%20High%20School%20State%2033%20of%20Surabaya!5e0!3m2!1sen!2sid!4v1641208284854!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: "1" }}
              allowFullScreen=""
              loading="lazy"
            />
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

  const general = public_data.general;
  const menu = public_data.menu;

  return { props: { general, menu } };
};

export default Index;
