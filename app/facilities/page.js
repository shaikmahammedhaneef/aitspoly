'use client';
import { useState } from "react";
import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Image from "next/image";

export default function Facilities() {
    const [activeTab, setActiveTab] = useState("E-Classrooms");

    const tabs = [
        "E-Classrooms",
        "College Auditorium",
        "Sports",
        "NSS",
        "Gymnasium",
        "Canteen",
        "SCOUTS & GUIDES"
    ];

    const images = {
        "E-Classrooms": ["/images/eclassroom1.jpg", "/images/eclassroom2.jpg", "/images/eclassroom3.jpg"],
        "College Auditorium": ["/images/auditorium1.jpg", "/images/auditorium2.jpg", "/images/auditorium3.jpg"],
        "Sports": ["/images/sports1.jpg", "/images/sports2.jpg", "/images/sports3.jpg"],
        "NSS": ["/images/nss1.jpg", "/images/nss2.jpg", "/images/nss3.jpg"],
        "Gymnasium": ["/images/gym1.jpg"],
        "Canteen": ["/images/canteen1.jpg", "/images/canteen2.jpeg", "/images/canteen3.jpeg"],
        "SCOUTS & GUIDES": ["/images/scouts1.jpeg", "/images/scouts2.jpeg", "/images/scouts3.jpeg"]
    };

    return (
        <div className="bg-gray-50 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Campus Facilities</h1>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 text-lg font-semibold rounded-lg shadow-md transition-all 
                                    ${
                                        activeTab === tab 
                                        ? "bg-blue-600 text-white" 
                                        : "bg-gray-200 text-gray-800 hover:bg-blue-300"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {images[activeTab].map((image, index) => (
                            <div key={index} className="rounded-lg shadow-md overflow-hidden">
                                <Image 
                                    src={image} 
                                    alt={`${activeTab} Image ${index + 1}`} 
                                    width={400} 
                                    height={300} 
                                    className="object-cover w-full h-60"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}