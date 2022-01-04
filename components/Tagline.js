import React from 'react'
import Link from 'next/link'
const Tagline = ({ headline }) => {

    return (
        <div className="main-tagline" data-aos="fade-up">
            {headline ?
                <div className="container">
                    <h3 className="cl-white">{headline.title}</h3>
                    <p className="cl-white">{headline.excerpt}
                    </p>
                    <Link href={`/pengumuman/${headline.slug}`} >
                        <a className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                            <span>Lihat selengkapnya</span>
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </Link>

                </div>
                :
                <div className="container">
                    <h3 className="cl-white">PPDB 2021 telah dibuka...</h3>
                    <p className="cl-white">PPDB 2021 akan dimulai pendaftarannya pada tanggal 07-11 Juni 2021 (Periode 1) dan 24-30 Juni 2021 (Periode 2).
                        Informasi lengkap terkait Penerimaan Peserta Didik Baru Tahun 2021 SMPN 33 Surabaya dapat diperoleh pada tautan berikut
                    </p>
                    <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Link PPDB</span>
                        <i className="bi bi-arrow-right"></i>
                    </a>

                </div>
            }
        </div>
    )
}

export default Tagline
