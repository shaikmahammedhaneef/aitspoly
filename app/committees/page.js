import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Committees() {
    const committees = [
        { name: "Anti Ragging Cell", link: "/committees/anti-ragging", image: "/anti-ragging.png" },
        { name: "Academic Council", link: "/committees/academic-council", image: "/academic-council.png" },
        { name: "Finance Council", link: "/committees/finance-council", image: "/finance-council.png" },
        { name: "SC/ST Cell", link: "/committees/sc-st-cell", image: "/sc-st-cell.png" },
        { name: "Women Empowerment Cell", link: "/committees/women-empowerment", image: "/women-empowerment.png" },
        { name: "Student Welfare", link: "/committees/student-welfare", image: "/student-welfare.png" },
    ];

    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">Committees</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {committees.map((committee, index) => (
                        <Link key={index} href={committee.link}>
                            <div className="rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-1 cursor-pointer animate-slideIn">
                                <Image
                                    src={committee.image}
                                    alt={committee.name}
                                    width={400}
                                    height={250}
                                    className="rounded-t-lg"
                                />
                                <div className="p-6 text-center">
                                    <h2 className="text-xl font-semibold text-gray-700">{committee.name}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}