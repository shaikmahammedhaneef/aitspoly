import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Link from "next/link";

export default function FinanceCouncil() {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Finance Council
                </h1>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    The Finance Council is responsible for overseeing the financial planning and budgeting of the institution, ensuring efficient allocation and utilization of resources.
                </p>

                {/* Objectives Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objectives</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>To ensure financial stability and accountability within the institution.</li>
                        <li>To plan and approve budgets for various academic and administrative activities.</li>
                        <li>To monitor expenditures and optimize resource allocation.</li>
                        <li>To comply with financial regulations and promote transparency.</li>
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

                {/* Responsibilities Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsibilities</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Preparation and approval of institutional budgets.</li>
                        <li>Monitoring financial transactions and ensuring transparency.</li>
                        <li>Planning and executing cost-effective initiatives.</li>
                        <li>Providing financial reports and audits.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}