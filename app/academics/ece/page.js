import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";

export default function DECEDepartment() {
    const facultyMembers = [
        { name: "P. VIJAYA", position: "Head of Department" },
        { name: "K. SUBHASHINI", position: "Faculty" },
        { name: "A. SRAVANI", position: "Faculty" },
        { name: "S. JAFFAR ALI", position: "Faculty" },
        { name: "K. ABDUL KHADER", position: "Faculty" },
        { name: "T. SASI PRIYANKA", position: "Faculty" }
    ];

    return (
        <div className="bg-gray-50 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="bg-white p-8">
                {/* Department Overview Section */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Diploma in Electrical and Computer Engineering (DECE) Department</h1>
                    <p className="text-lg text-gray-600 mb-6 text-center">
                        The DECE department focuses on offering a strong academic foundation in electrical and computer engineering, combining theoretical knowledge with practical skills.
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
                        <li>Focus on electrical systems and computer technologies for hands-on learning.</li>
                        <li>Exposure to real-world engineering challenges and solutions.</li>
                        <li>Emphasis on innovation, problem-solving, and industry-ready skills.</li>
                    </ul>
                    <p className="text-lg text-gray-600 text-center mb-6">
                        The DECE program prepares students to excel in the growing field of electrical and computer engineering.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}