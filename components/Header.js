import React, { useState, useEffect } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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

    return (
        <>
            <div className="topnav topnav d-none d-md-block">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <ul className="d-flex align-items-center">
                        <li><a className="" href="#"><i className="bi bi-telephone-fill"></i> 031-7310886</a></li>
                        <li><a className="" href="#"><i className="bi bi-envelope-fill"></i> smpn_33sby@yahoo.co.id</a></li>
                        <li><a className="" href="#"><i className="bi bi-geo-alt-fill"></i> Jl. Putat Gede Selatan 8, Surabaya</a></li>

                    </ul>
                    <ul className="align-items-center">
                        <li><a className="" href="#"><i className="bi bi-instagram"></i></a></li>
                        <li><a className="" href="#"><i className="bi bi-youtube"></i></a></li>
                        <li><a className="" href="#"><i className="bi bi-facebook"></i></a></li>
                        <li><a className="" href="#"><i className="bi bi-twitter"></i></a></li>

                    </ul>

                </div>
            </div>
            <header id="header" className="header">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src="images/logo.png" alt="" />
                        <span>SMPN 33 <i>Surabaya</i></span>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Beranda</a></li>
                            <li className="dropdown"><a href="#"><span>Profil</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#about">Publikasi</a></li>
                            <li><a className="nav-link scrollto" href="#about">Media</a></li>
                            <li><a className="nav-link scrollto" href="#about">Galeri</a></li>
                            <li><a className="nav-link scrollto" href="#about">Kontak</a></li>
                            {/* <li><a href="blog.html">Blog</a></li> */}
                            {/* <li><a className="nav-link scrollto" href="#services">Services</a></li> */}
                            {/* <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li> */}
                            {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}

                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                            <li>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                                </div>
                            </li>
                            {/* <li><a className="getstarted scrollto" href="#about">Get Started</a></li> */}
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>
    )

    // return (
    //     <div className={`header${sticky ? ' sticky' : ''}`}>
    //         <Navbar light expand="md">
    //             <Container>
    //                 <NavbarBrand href="/">LOGO</NavbarBrand>
    //                 <NavbarToggler onClick={toggle} />
    //                 <Collapse isOpen={isOpen} navbar>
    //                     <Nav className="m-auto" navbar>
    //                         <NavItem>
    //                             <NavLink href="/">Home</NavLink>
    //                         </NavItem>
    //                         <NavItem>
    //                             <NavLink href="#feature">Features</NavLink>
    //                         </NavItem>
    //                         <NavItem>
    //                             <NavLink href="#service">Services</NavLink>
    //                         </NavItem>
    //                         <NavItem>
    //                             <NavLink href="#about">About</NavLink>
    //                         </NavItem>
    //                     </Nav>
    //                 </Collapse>
    //             </Container>
    //         </Navbar>
    //     </div>
    // );
}

export default Header;