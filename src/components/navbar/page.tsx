'use client'

import './navbar.css';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useEffect, useMemo, useState } from 'react';

interface interNavItem {
    icon: String, name: String, path: String, isAuth: Boolean
}

const Navbar = () => {
    const burgerMenu = window.document.querySelector('.burger-menu');
    const navLinks = window.document.querySelector('.nav-links');
    const [navItem, setNavItem] = useState<interNavItem[]>([])
    console.log("<<<<===header called===>>>")

    burgerMenu?.addEventListener('click', () => {
        burgerMenu.classList.toggle("active")
        // burgerMenu?.classList.toggle('active');
    });

    const localUser = localStorage.getItem("user")

    const isUser = useMemo(() => {
        return localUser
    }, [localUser])

    let navMenuItems = [
        { icon: "", name: "Home", path: "/", isAuth: true },
        { icon: "", name: "About", path: "/about", isAuth: true },
        { icon: "", name: "Services", path: "/services", isAuth: true },
        { icon: "", name: "Contact", path: "/contact", isAuth: true },
        { icon: "", name: "Logout", path: "LogOut", isAuth: true },
        { icon: "", name: "Login", path: "/auth/login", isAuth: false },
        { icon: "", name: "Signup", path: "/auth/signup", isAuth: false }
    ]

    useEffect(() => {
        console.log("useEffect runb====")
        setNavItem([...navMenuItems.filter((ele) => {
            if (!ele.isAuth && !isUser) {
                console.log(ele.isAuth, isUser)
                return true;
            } else if (ele.isAuth && isUser) {
                return true
            }
        })])
        console.log("navMenuItems==", navMenuItems)
    }, [isUser])


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
                    {navItem.map((item: any) => <li><Link key={item.name} href={item.path}>{item.name}</Link></li>)}

                </ul>
                <div className="burger-menu">
                    &#9776;
                    <ul className="phone-links d-flex column">
                        {navItem.map((item: any) => <li><Link href={item.path}>{item.name}</Link></li>)}

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar