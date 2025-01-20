'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiMapPin, FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full flex flex-col bg-white">
            <div className="topNav bg-gray-100 py-2 px-4 flex flex-col sm:flex-row justify-between items-center text-gray-700 text-sm">
                <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                    <a
                        className="topNav-link flex items-center gap-1 hover:text-red-600 transition-all"
                        href="https://maps.app.goo.gl/sKdBzXpZ9PHffowC7"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FiMapPin className="mr-1" />
                        Locate Us
                    </a>
                    <a
                        className="topNav-link flex items-center gap-1 hover:text-red-600 transition-all"
                        href="mailto:aitskadapa@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FiMail className="mr-1" />
                        aitskadapa@gmail.com
                    </a>
                </div>
                <h1 className="topNav-code text-center sm:text-right font-semibold">
                    POLYCET CODE: <span className="text-red-600">AITK</span>
                </h1>
            </div>

            {/* News Section */}
            <div className="bg-black text-white flex flex-col sm:flex-row items-center">
                <div className="relative inline-flex items-center w-full sm:w-auto">
                    <span className="bg-red-600 text-white text-nowrap z-10 inline-block pl-2 pr-3 py-2 font-semibold text-lg">
                        Latest News
                    </span>
                    <span className="border-l-8 border-red-600 border-dashed bg-white h-0 w-0 text-white inline-block align-middle ml-1"></span>
                </div>

                <div className="text-amber-500 animate-infinite-scroll text-nowrap overflow-hidden w-full px-4 py-2 text-center sm:text-left">
                    Diploma III Year Regular and Supplementary Results have been released!
                </div>

                <button className="bg-green-500 w-full h-full sm:w-1/12 p-2 font-semibold z-10 text-center">
                    Login
                </button>
            </div>
            <div className="w-full">
                <div className="w-full flex items-center justify-center p-2">
                    <Image src={"/logo.png"} priority unoptimized width={200} height={200} alt="logo" className="w-full md:w-2/3 h-max" />
                </div>
                <nav className="desktopNav">
                    <Link className="desktopNav-link" href={"/about"}>About Us</Link>
                    <Link className="desktopNav-link" href={"/academics"}>Academics</Link>
                    <Link className="desktopNav-link" href={"/facilities"}>Facilities</Link>
                    <Link className="desktopNav-link" href={"/commitees"}>Commitees</Link>
                    <Link className="desktopNav-link" href={"/contact"}>Contact Us</Link>
                    <Link className="desktopNav-link" href={"/grievance"}>Grievance</Link>
                    <Link className="desktopNav-link" href={"/studentportal"}>Student Portal</Link>
                </nav>
                <nav className="mobileNav">
                    <div className="mobileNav-icon">
                        <button onClick={() => setOpen(!open)}>{open ? <FiMenu /> : <FiX />}</button>
                        <h1>Navigation Menu</h1>
                    </div>
                    <div className={`${open ? "" : "hidden"}`}>
                        <div className="mobileNav-links">
                            <Link className="mobileNav-link" href={"/about"}>About Us</Link>
                            <Link className="mobileNav-link" href={"/academics"}>Academics</Link>
                            <Link className="mobileNav-link" href={"/facilities"}>Facilities</Link>
                            <Link className="mobileNav-link" href={"/commitees"}>Commitees</Link>
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