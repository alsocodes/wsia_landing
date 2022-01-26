import Link from 'next/link'
import React from 'react'

const Footer = (props) => {
    const {
        general,
        menu_bottom_1,
        menu_bottom_2,
    } = props
    return (
        <>
            <footer id="footer" className="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-5 col-md-12 footer-info">
                                <a href="index.html" className="logo d-flex align-items-center">
                                    <img src="images/logo.png" alt="" />
                                    <span>{general?.organization}</span>
                                </a>
                                <p>{general?.tagline}</p>
                                <div className="social-links mt-3">
                                    {general?.twitter ? <Link href={general?.twitter}><a className="twitter"><i className="bi bi-twitter"></i></a></Link> : ""}
                                    {general?.facebook ? <Link href={general?.facebook}><a className="facebook"><i className="bi bi-facebook"></i></a></Link> : ""}
                                    {general?.instagram ? <Link href={general?.instagram}><a className="instagram"><i className="bi bi-instagram"></i></a></Link> : ""}
                                    {general?.youtube ? <Link href={general?.youtube}><a className="youtube"><i className="bi bi-youtube"></i></a></Link> : ""}
                                </div>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Tautan utama</h4>
                                <ul>
                                    {menu_bottom_1?.map((item, key) => {
                                        return (
                                            <li key={key}><Link href={item.link}><a> <i className="bi bi-chevron-right"></i> {item.text}</a></Link></li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Tautan terkait</h4>
                                <ul>
                                    {menu_bottom_2?.map(item => {
                                        return (
                                            <li><Link href={item.link}><a> <i className="bi bi-chevron-right"></i> {item.text}</a></Link></li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                <h4>Kontak</h4>
                                <p>
                                    {general?.address} {' '} Indonesia <br /><br />
                                    <strong>Telpon:</strong> {general?.phone}<br />
                                    <strong>Email:</strong> {general?.email}<br />
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>SMPN 33 Surabaya</span></strong>.
                        &nbsp;&nbsp;&nbsp; <i className="bi bi-code-slash"></i> Developed by <Link href="https://also.my.id"><a className="adev" >alsoProject</a></Link>.
                    </div>

                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>

        </>
    )
}

export default Footer
