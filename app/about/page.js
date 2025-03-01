import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 w-full min-h-screen flex flex-col">
            <NavBar />

            {/* About Annacharya Group Section */}
            <section className="font-[family-name:var(--font-geist-sans)] text-center py-12 px-4 animate__animated animate__fadeInUp">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Annamacharya Group</h1>
                <p className="text-lg text-gray-700 mx-auto max-w-3xl leading-relaxed">
                    Annamacharya Group of Institutions is committed to imparting quality education and fostering an environment of growth and innovation.
                    We aim to equip our students with the knowledge and skills required to excel in their professional careers.
                </p>
            </section>

            {/* Vision and Mission Section */}
            <section className="font-[family-name:var(--font-geist-sans)] bg-white py-16 px-8 text-center">
                <h2 className="text-4xl font-semibold text-gray-800 mb-8">Vision & Mission</h2>
                <div className="flex flex-col md:flex-row justify-around gap-12">
                    {/* Vision */}
                    <div className="flex-1 bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-300 p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
                        <p className="text-gray-600">
                            To emerge as a premier institute, transforming individuals into highly enlightened professionals enriched with innovative skills and ethical values.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="flex-1 bg-gradient-to-r from-green-300 via-teal-200 to-blue-300 p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
                        <p className="text-gray-600">
                            <strong>M1:</strong> Impart quality technical education to enhance knowledge and skills towards employability, higher education, and research.<br />
                            <strong>M2:</strong> Promote the upgradation of teaching and research skills through quality infrastructure.<br />
                            <strong>M3:</strong> Enrich rural education seekers, providing them with ethics, innovative thinking, and leadership qualities for the sustainable development of the nation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            {/* Leadership Section */}
            <section className="font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-6">
                <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">Our Leadership</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Honorable Secretary */}
                    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <Image
                            src="/secretary.jpg"
                            alt="Honorable Secretary"
                            width={240}
                            height={240}
                            className="rounded-full mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sri. C. Gangi Reddy</h3>
                        <p className="text-center text-gray-600 mb-4">
                            Sri. C. Gangi Reddy garu is the visionary leader behind the establishment of Annamacharya Educational Trust. His passion for education and rural development has been instrumental in shaping the success of the institute.
                        </p>
                        <p className="text-gray-600 font-semibold">Message:</p>
                        <p className="text-gray-600 mt-2">
                            "Education is the key to self-dependence and neutralizing socio-economic disparities. I urge staff to continue their efforts to make our institution one of the best."
                        </p>
                    </div>

                    {/* Executive Director */}
                    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <Image
                            src="/director.jpg"
                            alt="Executive Director"
                            width={240}
                            height={240}
                            className="rounded-full mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sri. C. Abhishek Reddy</h3>
                        <p className="text-center text-gray-600 mb-4">
                            Sri. C. Abhishek Reddy garu brings international expertise in marketing and project management. He focuses on building industry-academic relations and fostering holistic development in students.
                        </p>
                        <p className="text-gray-600 font-semibold">Message:</p>
                        <p className="text-gray-600 mt-2">
                            "Our mission is to nurture technocrats for the global scenario. We aim to provide students with the necessary skills to excel in their professional lives and contribute to society."
                        </p>
                    </div>

                    {/* Principal */}
                    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <Image
                            src="/principal.png"
                            alt="Principal"
                            width={240}
                            height={240}
                            className="rounded-full mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dr. Sudhakara Reddy</h3>
                        <p className="text-center text-gray-600 mb-4">
                            Dr. Sudhakara Reddy's dedication to education and administration has driven AITS to its current heights. With over 25 years of experience, he is committed to student success both academically and personally.
                        </p>
                        <p className="text-gray-600 font-semibold">Message:</p>
                        <p className="text-gray-600 mt-2">
                            "I am proud to lead AITS in its pursuit of academic excellence and student development. We provide an environment where students can excel in both their studies and extracurricular activities."
                        </p>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-yellow-200 to-orange-300 py-16 px-8 text-center">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6">About Annamacharya Educational Trust</h2>
                <p className="text-lg text-gray-700 mx-auto max-w-3xl leading-relaxed mb-8">
                    Annamacharya Educational Trust was founded in 1997 with a mission to provide professional education to students from rural areas of Rayalaseema. The Trust has established several colleges and aims to expand its reach by providing quality education to those in need.
                </p>
            </section>

            <Footer />
        </div>
    );
}
