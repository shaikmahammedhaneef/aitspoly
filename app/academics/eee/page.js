import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";

export default function DEEEDepartment() {
    const facultyMembers = [
        { name: "C. BRAMHANANDA BABU", position: "Head of Department" },
        { name: "S. RENUKA", position: "Faculty" },
        { name: "B. PRIYANKA", position: "Faculty" },
        { name: "Y. V. SRIKAR", position: "Faculty" },
        { name: "P. HARITHA", position: "Faculty" },
        { name: "C. G. REVATHI", position: "Faculty" }
    ];

    return (
        <div className="bg-gray-50 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8">
                {/* Department Overview Section */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Diploma in Electrical and Electronics Engineering (DEEE) Department</h1>
                    <p className="text-lg text-gray-600 mb-6 text-center">
                        The DEEE department offers a rigorous academic program focused on electrical and electronics engineering, preparing students for the evolving needs of the industry.
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
                        <li>Comprehensive study of electrical and electronics principles and practices.</li>
                        <li>Hands-on experience with the latest technologies and equipment in the field.</li>
                        <li>Focus on practical applications of electrical and electronics engineering in real-world projects.</li>
                    </ul>
                    <p className="text-lg text-gray-600 text-center mb-6">
                        The DEEE program is designed to provide students with the skills and knowledge needed to excel in the electrical and electronics engineering sector.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}