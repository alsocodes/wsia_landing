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
import Link from 'next/link'

const Header = (props) => {
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

    const {
        general,
        menus
    } = props

    // console.log('aaa', menus)

    const generateMenu = () => {
        <div>aaaa</div>
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

                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src="images/logo.png" alt="" />
                        <span>SMPN 33 <i>Surabaya</i></span>
                    </a>

                    <nav id="navbar" className="navbar">
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
                                                <Link className="nav-link" href='#'>
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
                                                                            <Link className="nav-link" href='#'>
                                                                                <a><span>{menu.text}</span> <i className="bi bi-chevron-right"></i></a>
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
                                    <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                                </div>
                            </li>
                            {/* 
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
                            <li><a className="nav-link" href="#about">Publikasi</a></li>
                            <li><a className="nav-link" href="#about">Media</a></li>
                            <li><a className="nav-link" href="#about">Galeri</a></li>
                            <li><a className="nav-link" href="#about">Kontak</a></li>
                           
                            <li><a className="nav-link" href="#contact">Contact</a></li>
                            */}
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