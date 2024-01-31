'use client'

import './navbar.css';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Navbar = () => {
    const burgerMenu = window.document.querySelector('.burger-menu');
    const navLinks = window.document.querySelector('.nav-links');

    console.log("<<<<===header called===>>>")

    burgerMenu?.addEventListener('click', () => {
        burgerMenu.classList.toggle("active")
        // burgerMenu?.classList.toggle('active');
    });

    const isUser = localStorage.getItem("user")

    let navMenuItems = [
        { icon: "", name: "Home", path: "/", isAuth: true },
        { icon: "", name: "About", path: "/about", isAuth: true },
        { icon: "", name: "Services", path: "/services", isAuth: true },
        { icon: "", name: "Contact", path: "/contact", isAuth: true },
        { icon: "", name: "Logout", path: "LogOut", isAuth: true },
        { icon: "", name: "Login", path: "/auth/login", isAuth: false },
        { icon: "", name: "Signup", path: "/auth/signup", isAuth: false }
    ]

    navMenuItems = navMenuItems.filter((ele) => { if (!ele.isAuth && !isUser) return true; else if (ele.isAuth && isUser) return true })

    console.log("navMenuItems==>>", navMenuItems, isUser)

    return (
        <>
            <ProgressBar
                height="4px"
                color="#f0f0f0"
                options={{ showSpinner: false }}
                shallowRouting
            />

            <nav className="navbar">
                <div className="logo">Logo</div>
                <ul className="nav-links">
                    {navMenuItems.map((item) => <li><Link key={item.name} href={item.path}>{item.name}</Link></li>)}

                </ul>
                <div className="burger-menu">
                    &#9776;
                    <ul className="phone-links d-flex column">
                        {navMenuItems.map((item) => <li><Link href={item.path}>{item.name}</Link></li>)}

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar