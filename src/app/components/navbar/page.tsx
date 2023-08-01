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
        navLinks?.classList.toggle('active');
    });
    return (
        <>
            <ProgressBar
                height="4px"
                color="#29D"
                options={{ showSpinner: false }}
                shallowRouting
            />

            <nav className="navbar">
                <div className="logo">Logo</div>
                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href={`services/view/123456`}>Contact</Link></li>
                </ul>
                <div className="burger-menu">&#9776;</div>
            </nav>
        </>
    )
}

export default Navbar