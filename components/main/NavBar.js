'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full flex flex-col bg-white">
            <div className="topNav">
                <div>
                    <a className="topNav-link" href="https://maps.app.goo.gl/sKdBzXpZ9PHffowC7" rel="noreferrer" target="_blank">
                        <span className="material-symbols-outlined">location_on</span>
                        Locate Us
                    </a>
                    <a className="topNav-link" href="mailto:aitskadapa@gmail.com" rel="noreferrer" target="_blank">
                        <span className="material-symbols-outlined">mail</span>
                        aitskadapa@gmail.com
                    </a>
                </div>
                <h1 className="topNav-code">POLYCET CODE:<span>AITK</span></h1>
            </div>
            <div className="w-full">
                <div className="w-full flex items-center justify-center p-2">
                    <Image src={"/logo.png"} priority unoptimized width={200} height={200} alt="logo" className="w-full md:w-2/3 h-max" />
                </div>
                <nav className="desktopNav">
                    <Link className="desktopNav-link" href={"/about"}>About Us</Link>
                    <Link className="desktopNav-link" href={"/departments"}>Departments</Link>
                    <Link className="desktopNav-link" href={"/academics"}>Academics</Link>
                    <Link className="desktopNav-link" href={"/facilities"}>Facilities</Link>
                    <Link className="desktopNav-link" href={"/commitees"}>Commitees</Link>
                    <Link className="desktopNav-link" href={"/gallery"}>Gallery</Link>
                    <Link className="desktopNav-link" href={"/contact"}>Contact Us</Link>
                    <Link className="desktopNav-link" href={"/grievance"}>Grievance</Link>
                    <Link className="desktopNav-link" href={"/studentportal"}>Student Portal</Link>
                </nav>
                <nav className="mobileNav">
                    <div className="mobileNav-icon">
                        <button onClick={() => setOpen(!open)}><span className="material-symbols-outlined">{open ? "close" : "menu"}</span></button>
                        <h1>Navigation Menu</h1>
                    </div>
                    <div className={`${open ? "" : "hidden"}`}>
                        <div className="mobileNav-links">
                            <Link className="mobileNav-link" href={"/about"}>About Us</Link>
                            <Link className="mobileNav-link" href={"/departments"}>Departments</Link>
                            <Link className="mobileNav-link" href={"/academics"}>Academics</Link>
                            <Link className="mobileNav-link" href={"/facilities"}>Facilities</Link>
                            <Link className="mobileNav-link" href={"/commitees"}>Commitees</Link>
                            <Link className="mobileNav-link" href={"/gallery"}>Gallery</Link>
                            <Link className="mobileNav-link" href={"/contact"}>Contact Us</Link>
                            <Link className="mobileNav-link" href={"/grievance"}>Grievance</Link>
                            <Link className="mobileNav-link" href={"/studentportal"}>Student Portal</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}