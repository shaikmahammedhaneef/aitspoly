import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Link from "next/link";

export default function WomenEmpowermentCell() {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Women Empowerment Cell
                </h1>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    The Women Empowerment Cell aims to create a safe, supportive, and empowering environment for women in the institution by promoting gender equality and addressing women's issues.
                </p>

                {/* Objectives Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objectives</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>To create awareness about women's rights and responsibilities.</li>
                        <li>To promote equal opportunities in academics and leadership.</li>
                        <li>To address and resolve issues related to women in the institution.</li>
                        <li>To organize skill development and self-defense programs.</li>
                    </ul>
                </div>

                {/* Committee Members Table */}
                <div className="overflow-x-auto shadow-lg rounded-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Committee Members</h2>
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-6 text-left text-sm font-semibold uppercase">
                                    Name
                                </th>
                                <th className="py-3 px-6 text-left text-sm font-semibold uppercase">
                                    Designation
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                <td className="py-4 px-6">Dr. A. Sudhakara Reddy</td>
                                <td className="py-4 px-6">Principal</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                <td className="py-4 px-6">Mrs. P. Vijaya</td>
                                <td className="py-4 px-6">HoD of ECE</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                <td className="py-4 px-6">Mrs. K. Subhashini</td>
                                <td className="py-4 px-6">Faculty, ECE</td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="py-4 px-6">Mrs. B. Swaroopa Rani</td>
                                <td className="py-4 px-6">Faculty, DCME</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Activities Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Activities</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Workshops on leadership and entrepreneurship for women.</li>
                        <li>Health and wellness sessions for female students and staff.</li>
                        <li>Self-defense training and legal awareness programs.</li>
                        <li>Counseling and mentorship support.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}