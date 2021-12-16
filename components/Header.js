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
            <div className="topnav">
                <ul>
                    <li><a className="nav-link" href="#"><i class="bi bi-instagram"></i></a></li>
                    <li><a className="nav-link" href="#"><i class="bi bi-youtube"></i></a></li>
                    <li><a className="nav-link" href="#"><i class="bi bi-facebook"></i></a></li>
                    <li><a className="nav-link" href="#"><i class="bi bi-twitter"></i></a></li>

                </ul>
            </div>
            <header id="header" className="header">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src="images/logo.png" alt="" />
                        <span>SMPN 33 <i>Surabaya</i></span>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            {/* <li><a className="nav-link scrollto" href="#services">Services</a></li> */}
                            {/* <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li> */}
                            {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
                            <li><a href="blog.html">Blog</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
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
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                            <li>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
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