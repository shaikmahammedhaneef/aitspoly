import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function SCSTCell() {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    SC/ST Cell
                </h1>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    The SC/ST Cell aims to provide support and guidance to students and staff belonging to the Scheduled Castes and Scheduled Tribes, ensuring a discrimination-free and empowering environment.
                </p>

                {/* Objectives Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Objectives of SC/ST Cell
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>To create awareness about constitutional provisions for SC/ST communities.</li>
                        <li>To ensure the implementation of government policies related to SC/ST students.</li>
                        <li>To provide counseling and support for academic and personal development.</li>
                        <li>To prevent any form of discrimination in the institution.</li>
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
                                <td className="py-4 px-6">Dr. M. Murali Mohan Naik</td>
                                <td className="py-4 px-6">Head</td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="py-4 px-6">Y. Obulesu</td>
                                <td className="py-4 px-6">Faculty</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Responsibilities Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Responsibilities of SC/ST Cell
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Monitoring and addressing grievances of SC/ST students and employees.</li>
                        <li>Providing financial assistance through scholarships and government schemes.</li>
                        <li>Conducting awareness programs and workshops for SC/ST communities.</li>
                        <li>Ensuring proper implementation of reservation policies.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}