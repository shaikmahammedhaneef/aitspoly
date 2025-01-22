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
            </div>
            <div className="w-full">
                <div className="w-full flex items-center justify-center p-2">
                    <Image src={"/logo.png"} priority unoptimized width={200} height={200} alt="logo" className="w-full md:w-2/3 h-max" />
                </div>
                <nav className="desktopNav">
                    <Link className="desktopNav-link" href={"/"}>Home</Link>
                    <Link className="desktopNav-link" href={"/about"}>About Us</Link>
                    <Link className="desktopNav-link" href={"/academics"}>Academics</Link>
                    <Link className="desktopNav-link" href={"/facilities"}>Facilities</Link>
                    <Link className="desktopNav-link" href={"/committees"}>Commitees</Link>
                    <Link className="desktopNav-link" href={"/contact"}>Contact Us</Link>
                    <Link className="desktopNav-link" href={"/grievance"}>Grievance</Link>
                </nav>
                <nav className="mobileNav">
                    <div className="mobileNav-icon flex justify-between h-8 items-center p-4 text-white">
                        <button onClick={() => setOpen(!open)} className="text-2xl">
                            {open ? <FiX /> : <FiMenu />}
                        </button>
                        <h1 className="text-2xl font-bold">Navigation Menu</h1>
                    </div>

                    <div className={`mobileNav-links-container ${open ? 'block' : 'hidden'}`}>
                        <div className="mobileNav-links flex flex-col bg-blue-600 p-6 space-y-4">
                            <Link href="/" className="mobileNav-link text-white text-xl hover:text-gray-200 transition-transform transform hover:scale-105">Home</Link>
                            <Link href="/about" className="mobileNav-link text-white text-xl hover:text-gray-200 transition-transform transform hover:scale-105">About Us</Link>
                            <Link href="/academics" className="mobileNav-link text-white text-xl hover:text-gray-200 transition-transform transform hover:scale-105">Academics</Link>
                            <Link href="/facilities" className="mobileNav-link text-white text-xl hover:text-gray-200 transition-transform transform hover:scale-105">Facilities</Link>
                            <Link href="/committees" className="mobileNav-link text-white text-xl hover:text-gray-200 transition-transform transform hover:scale-105">Committees</Link>
                            <Link href="/contact" className="mobileNav-link text-white text-xl hover:text-gray-200 transition-transform transform hover:scale-105">Contact Us</Link>
                            <Link href="/grievance" className="mobileNav-link text-white text-xl hover:text-gray-200 transition-transform transform hover:scale-105">Grievance</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}