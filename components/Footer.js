import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-5 col-md-12 footer-info">
                                <a href="index.html" className="logo d-flex align-items-center">
                                    <img src="images/logo.png" alt="" />
                                    <span>SMP Negeri 33 Surabaya</span>
                                </a>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies
                                    darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Tautan utama</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Beranda</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Profil</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Osis</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Maba</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Pramuka</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Tautan terkait</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Kemendikbud RI</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Dinas Pendidikan Surabaya</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">PGRI</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Organisasi kesiswaan</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
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

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>SMPN 33 Surabaya</span></strong>.
                        &nbsp;&nbsp;&nbsp; <i className="bi bi-code-slash"></i> Developed by <a className="adev" href="https://also.my.id">alsoProject</a>.
                    </div>

                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>

        </>
    )
}

export default Footer
