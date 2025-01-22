import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";

export default function DCMEDepartment() {
    const facultyMembers = [
        { name: "S. ARIFULLAH", position: "Head of Department" },
        { name: "S. MD. HANEEF", position: "Faculty" },
        { name: "S. T. BABA WARIS", position: "Faculty" },
        { name: "K. LAKSHMI KALA", position: "Faculty" },
        { name: "B. SWAROOPA RANI", position: "Faculty" },
        { name: "K. SOWMYA", position: "Faculty" }
    ];

    return (
        <div className="bg-gray-50 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8">
                {/* Department Overview Section */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Diploma in Computer Engineering (DCME) Department</h1>
                    <p className="text-lg text-gray-600 mb-6 text-center">
                        The DCME department offers a comprehensive diploma program aimed at building a strong foundation in computer engineering, preparing students for industry and research roles.
                    </p>
                </div>

                {/* Faculty Table */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Faculty</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto text-left border-collapse">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold text-gray-700">Faculty Name</th>
                                    <th className="px-6 py-3 text-lg font-semibold text-gray-700">Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facultyMembers.map((faculty, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100">
                                        <td className="px-6 py-4 text-gray-800">{faculty.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{faculty.position}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Program Highlights</h2>
                    <ul className="list-disc pl-6 text-lg text-gray-600 mb-6">
                        <li>Focus on foundational and advanced concepts in computer engineering.</li>
                        <li>Hands-on experience with industry-standard tools and technologies.</li>
                        <li>Opportunities for internships and practical learning in real-world scenarios.</li>
                    </ul>
                    <p className="text-lg text-gray-600 text-center mb-6">
                        The DCME program is designed to equip students with the skills required to excel in the dynamic field of computer engineering.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}