import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Link from "next/link";

export default function AntiRaggingCell() {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Anti-Ragging Cell
                </h1>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    The Anti-Ragging Cell is committed to creating a safe, secure, and ragging-free environment in the institution by promoting awareness, addressing complaints, and ensuring strict compliance with anti-ragging regulations.
                </p>

                {/* Objectives Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objectives</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>To prevent ragging by implementing strict guidelines and awareness programs.</li>
                        <li>To ensure a safe and respectful atmosphere for all students.</li>
                        <li>To address complaints promptly and take necessary disciplinary actions.</li>
                        <li>To counsel students on the importance of maintaining discipline and harmony.</li>
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
                                <td className="py-4 px-6">Sri. S. Arifullah</td>
                                <td className="py-4 px-6">HoD of CME</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                <td className="py-4 px-6">Mrs. P. Vijaya</td>
                                <td className="py-4 px-6">HoD of ECE</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                <td className="py-4 px-6">Sri. C. Bramhananda Babu</td>
                                <td className="py-4 px-6">HoD of EEE</td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="py-4 px-6">Sri. Y. Obulesu</td>
                                <td className="py-4 px-6">HoD of General Section</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Reporting Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Report Ragging</h2>
                    <p className="text-gray-700 mb-4">
                        If you face or witness any incidents of ragging, please report it immediately through the following channels:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Visit the Anti-Ragging Cell office located at Block B, Room 201.</li>
                        <li>Email your complaint to <span className="text-blue-600">antiragging@college.edu</span>.</li>
                        <li>Contact us via the helpline: <span className="font-semibold">+91 98765 43210</span>.</li>
                        <li>Fill out an anonymous online complaint form on our website.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}