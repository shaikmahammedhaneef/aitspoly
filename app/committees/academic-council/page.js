import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Link from "next/link";

export default function AcademicCouncil() {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Academic Council
                </h1>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    The Academic Council is the principal academic body of the institution, responsible for maintaining standards of education, teaching, and research activities.
                </p>

                {/* Objectives Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objectives</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>To formulate academic policies and ensure their implementation.</li>
                        <li>To enhance the quality of education and research in the institution.</li>
                        <li>To review and update curricula as per industry and educational advancements.</li>
                        <li>To promote academic excellence through various initiatives.</li>
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
                        <li>Approval of new academic programs and revisions to existing ones.</li>
                        <li>Evaluation of student performance and academic regulations.</li>
                        <li>Encouraging research and development initiatives.</li>
                        <li>Collaboration with external academic and research institutions.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}