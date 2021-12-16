import React, { useEffect } from 'react'
import AOS from 'aos';
const Sambutan = () => {
    useEffect(() => {
        AOS.init({
            duration: 300
        });
    }, []);

    return (
        <section id="about" class="about">

            {/* <div class="container" data-aos="fade-up"> */}
            <div class="container">
                <div class="row gx-0">

                    {/* <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200"> */}
                    <div class="col-lg-6 d-flex flex-column justify-content-center">
                        <div class="content">
                            <h3 className="cl-sec">Sambutan kepala sekolah</h3>
                            <h2 className="cl-prim">SMPN33 Surabaya menyiapkan generasi unggul untuk Indonesia Maju</h2>
                            <p>
                                Assalamualaikum.... <br />Quisquam vel ut sint cum eos hic dolores aperiam.Sed deserunt et.Inventore et et dolor consequatur itaque ut voluptate sed et.Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                            </p>
                            <div class="text-center text-lg-start">
                                <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Baca selengkapnya</span>
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200"> */}
                    <div class="col-lg-6 d-flex align-items-center">
                        <img src="images/sambutan-kepala-sekolah.jpg" class="img-fluid" alt="" />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Sambutan
