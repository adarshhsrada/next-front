'use client'

import './navbar.css';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from "react-redux";
import { getLocalUserData, removeLocalUser } from '../../../utils/authService';
interface interNavItem {
    icon: String, name: String, path: String, isAuth: Boolean
}
interface authUser {
    userReducer: any;
    loading: boolean,
    token: string,
    userData: object,
    error: string
}

const Navbar = () => {
    const burgerMenu = window.document.querySelector('.burger-menu');
    const navLinks = window.document.querySelector('.nav-links');
    const [navItem, setNavItem] = useState<interNavItem[]>([])
    console.log("<<<<===header called===>>>")
    // const authUser = useSelector((user: authUser) => user.userReducer);
    burgerMenu?.addEventListener('click', () => {
        burgerMenu.classList.toggle("active")
        // burgerMenu?.classList.toggle('active');
    });

    const localUser = getLocalUserData().isUser

    console.log("navbar localUser====", localUser)

    const isUser = useMemo(() => {
        return localUser
    }, [localUser])

    let navMenuItems = [
        { icon: "", name: "Home", path: "/", isAuth: true },
        { icon: "", name: "About", path: "/about", isAuth: true },
        { icon: "", name: "Services", path: "/services", isAuth: true },
        { icon: "", name: "Contact", path: "/contact", isAuth: true },
        { icon: "", name: "Logout", path: "LogOut", isAuth: true, function: removeLocalUser },
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
        })
        ])
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
                    {navItem.map((item: any) => 
                        item.function ? <li>
                            <Link key={item.name} href={item.path}>{item.name}</Link>
                        </li> :
                        <li onClick={item.function}>
                            {item.name}
                        </li>
                    )}

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