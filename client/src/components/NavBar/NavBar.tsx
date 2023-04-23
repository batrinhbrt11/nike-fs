import React, { useEffect, useState } from "react";

import {
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    Bars3Icon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


const menuLinks = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'News & Feature',
        link: 'news'
    }, {
        name: 'Arrival',
        link: 'arrival'
    },
    {
        name: 'Story',
        link: 'story'
    }
]
export default function NavBar() {
    const [navState, setNavState] = useState(false);
    const [open, setOpen] = useState(false);
    const onCartToggle = () => {
        console.log("cartToggle");
    };

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            if (open === true) {
                setNavState(true);
            } else {
                setNavState(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);

        return () => {
            window.removeEventListener("scroll", onNavScroll);
        };
    }, [open]);

    const handleMobieBar = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpen(!open)
        if (window.scrollY < 30) {
            if (open == false)
                setNavState(true);
            else
                setNavState(false);
        }

    }

    return (
        <>
            <header
                className={
                    !navState
                        ? "absolute top-7 left-0 right-0 opacity-100 z-50"
                        : "fixed top-0 left-0 right-0 h-[9vh] opacity-100 z-[200] bg-slate-100 pt-4 pb-4"
                }
            >
                <nav className="md:justify-between md:pl-4 md:pr-3 flex items-center font-medium justify-around">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="logo/img"
                            className={`w-16 h-auto ${navState && "filter brightness-0"}`}
                        />
                    </div>
                    <ul className="md:hidden flex uppercase items-center justify-center gap-8 font-[Poppins]">
                        {menuLinks.map(l => (
                            <li key={l.link}>
                                <Link className={`${navState ?"text-slate-900 shadow-slate-100" : "text-slate-100 shadow-slate-900" }`} to={l.link} >{l.name}</Link>
                            </li>
                        ))}


                    </ul>
                    <ul className="flex items-center justify-center gap-2">
                        <li className="grid items-center">
                            <MagnifyingGlassIcon
                                className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                                    }`}
                            />
                        </li>

                        <li className="grid items-center">
                            <button
                                type="button"
                                onClick={onCartToggle}
                                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                            >
                                <ShoppingBagIcon
                                    className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                                        }`}
                                />
                                <div
                                    className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState
                                            ? "bg-slate-900 text-slate-100 shadow-slate-900"
                                            : "bg-slate-100 text-slate-900 shadow-slate-100"
                                        }`}
                                >
                                    11
                                </div>
                            </button>
                        </li>
                        <li className="md:block hidden grid items-center">
                            <button
                                type="button"
                                onClick={handleMobieBar}
                                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                            >
                                {
                                    open ? <XMarkIcon
                                        className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                                            }`} /> : <Bars3Icon
                                        className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                                            }`} />
                                }


                            </button>
                        </li>
                    </ul>

                </nav>
                <ul className={`md:items-center p-5 hidden text-center bg-slate-100 absolute md:static md:z-auto z-[-1] w-full md:w-auto transition-all duration-500 ease-in mt-5 ${open ? 'md:block' : 'md:hidden'}`}>
                    {
                        menuLinks.map((link) => (
                            <li key={link.link} className='gap-8 uppercase items-center justify-center gap-8 font-[Poppins] font-semibold text-base mb-3 ' >
                                <Link to={link.link} className='text-slate-900 shadow-slate-100 hover:text-gray-400 duration-500'>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </header>
        </>
    );
}
