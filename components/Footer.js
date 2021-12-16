import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer" class="footer">

                <div class="footer-top">
                    <div class="container">
                        <div class="row gy-4">
                            <div class="col-lg-5 col-md-12 footer-info">
                                <a href="index.html" class="logo d-flex align-items-center">
                                    <img src="images/logo.png" alt="" />
                                    <span>SMP Negeri 33 Surabaya</span>
                                </a>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies
                                    darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                <div class="social-links mt-3">
                                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-2 col-6 footer-links">
                                <h4>Tautan utama</h4>
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <a href="#">Beranda</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="#">Profil</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="#">Osis</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="#">Maba</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="#">Pramuka</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-2 col-6 footer-links">
                                <h4>Tautan terkait</h4>
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <a href="#">Kemendikbud RI</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="#">Dinas Pendidikan Surabaya</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="#">PGRI</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="#">Organisasi kesiswaan</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                <h4>Kontak</h4>
                                <p>
                                    Jl Putat Gede Selatan 18 <br />
                                    Surabaya, Jawa Timur. 62912<br />
                                    Indonesia <br /><br />
                                    <strong>Telpon:</strong> 031-7310886<br />
                                    <strong>Email:</strong> smpn_33sby@yahoo.co.id<br />
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong><span>SMPN 33 Surabaya</span></strong>.
                        &nbsp;&nbsp;&nbsp; <i class="bi bi-code-slash"></i> Developed by <a className="adev" href="https://also.my.id">alsoProject</a>.
                    </div>

                </div>
            </footer>

            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

        </>
    )
}

export default Footer
