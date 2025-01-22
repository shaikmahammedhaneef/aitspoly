import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Link from "next/link";

export default function StudentWelfareCell() {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Student Welfare Cell
                </h1>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    The Student Welfare Cell aims to support students in their academic, social, and personal development by providing a safe and inclusive environment.
                </p>

                {/* Objectives Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objectives</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>To provide counseling and guidance for academic and personal issues.</li>
                        <li>To promote student engagement through various initiatives.</li>
                        <li>To ensure the well-being and mental health of students.</li>
                        <li>To organize cultural, sports, and career-related activities.</li>
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

                {/* Activities Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Activities</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Career guidance and counseling sessions.</li>
                        <li>Health and wellness programs.</li>
                        <li>Workshops on personality development.</li>
                        <li>Student grievance redressal system.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}