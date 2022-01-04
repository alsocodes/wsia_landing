import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const router = useRouter();
    const [search, setSearch] = useState('')
    const [toggleMenu, setToggleMenu] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 90) {
            setSticky(true);
        } else if (window.scrollY < 90) {
            setSticky(false);
        }
    }

    const {
        general,
        menus
    } = props

    const onKeyUps = (e) => {
        setSearch(e.target.value)
        if (e.code === 'Enter' && e.target.value !== '') {
            router.push(`/pencarian?s=${e.target.value}`)
        }
    }

    const searchNow = () => {
        if (search !== '') {
            router.push(`/pencarian?s=${search}`)
        }
    }

    return (
        <>
            <div className="topnav topnav d-none d-md-block">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <ul className="d-flex align-items-center">
                        <li><a className="" href="#"><i className="bi bi-telephone-fill"></i> {general.phone}</a></li>
                        <li><a className="" href="#"><i className="bi bi-envelope-fill"></i> {general.email}</a></li>
                        <li><a className="" href="#"><i className="bi bi-geo-alt-fill"></i> {general.address}</a></li>

                    </ul>
                    <ul className="align-items-center">
                        {general.instagram ? <li><a href={general.instagram}><i className="bi bi-instagram"></i></a></li> : ""}
                        {general.youtube ? <li><a href={general.youtube}><i className="bi bi-youtube"></i></a></li> : ""}
                        {general.facebook ? <li><a href={general.facebook}><i className="bi bi-facebook"></i></a></li> : ""}
                        {general.twitter ? <li><a href={general.twitter}><i className="bi bi-twitter"></i></a></li> : ""}

                    </ul>

                </div>
            </div>
            <header id="header" className="header">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link href={`/`}>
                        <a className="logo d-flex align-items-center">
                            <div className="img mr-2">
                                <Image
                                    alt="Logo SMPN 33 Surabaya"
                                    src={`/images/logo.png`}
                                    width="80px"
                                    height="90px"
                                />
                            </div>
                            <span>SMPN 33 <i>Surabaya</i></span>
                        </a>
                    </Link>

                    <nav id="navbar" className={`navbar ${toggleMenu ? 'navbar-mobile' : ''}`}>
                        <ul>

                            {menus?.map((menu, key) => {
                                // console.log(menu)
                                let children = menu.children
                                let link = menu.link === '' ? '/' : `/${menu.link}`
                                return (
                                    <li key={key} className={children.length > 0 ? `dropdown` : ``}>
                                        {children.length === 0 ?
                                            <Link className="nav-link" href={link}>{menu.text}</Link>
                                            :
                                            <>
                                                <Link className="nav-link" href="#">
                                                    <a><span>{menu.text}</span> <i className="bi bi-chevron-down"></i></a>
                                                </Link>
                                                <ul>
                                                    {
                                                        children.map((child, key) => {
                                                            let sublink = `${link}/${child.link}`
                                                            let children = child.children
                                                            return (
                                                                <li key={key} className={children.length > 0 ? `dropdown` : ``}>
                                                                    {children.length === 0 ? <Link className="nav-link" href={sublink}>{child.text}</Link>
                                                                        : <>
                                                                            <Link className="nav-link" href={sublink}>
                                                                                <a><span>{child.text}</span> <i className="bi bi-chevron-right"></i></a>
                                                                            </Link>
                                                                            {children.length > 0 ?
                                                                                <ul>
                                                                                    {children.map((item, key) => {
                                                                                        let subsublink = `${sublink}/${item.link}`;
                                                                                        return (
                                                                                            <li key={key}>
                                                                                                <Link className="nav-link" href={subsublink}>{item.text}</Link>
                                                                                            </li>
                                                                                        )
                                                                                    })}
                                                                                </ul>
                                                                                : ""
                                                                            }
                                                                        </>
                                                                    }
                                                                </li>
                                                            )
                                                        })

                                                    }
                                                </ul>
                                            </>
                                        }
                                    </li>
                                )
                            })}
                            <li>
                                <div className="input-group">
                                    <input
                                        onKeyUp={(event) => onKeyUps(event)}
                                        type="text"
                                        className="form-control"
                                        placeholder="Search" aria-label="Search"
                                        aria-describedby="button-addon2" />
                                    <button
                                        onClick={() => searchNow()}
                                        className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                                </div>
                            </li>
                        </ul>
                        <i onClick={() => setToggleMenu(!toggleMenu)}
                            className={`bi ${toggleMenu ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}></i>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header;