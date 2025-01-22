import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactUs() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500">
            <NavBar />
            <div className="max-w-7xl mx-auto py-16 px-6 lg:px-20 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
                    Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">Us</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Contact Info Section */}
                    <div className="bg-gradient-to-r from-white to-gray-200 shadow-2xl rounded-2xl p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FiPhone className="text-4xl text-purple-600" />
                                <p className="text-lg text-gray-800 font-medium">+91-9603999591</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <FiMail className="text-4xl text-blue-600" />
                                <p className="text-lg text-gray-800 font-medium">aitskadapa@gmail.com</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <FiMapPin className="text-4xl text-pink-600" />
                                <p className="text-lg text-gray-800 font-medium leading-relaxed">
                                    Annamacharya Institute of Technology and Sciences, Kadapa <br />
                                    Utukur (P), C. K. Dinne(M), Kadapa, AP - 516003
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="bg-gradient-to-r from-gray-200 to-white shadow-2xl rounded-2xl p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Follow Us</h2>
                        <div className="flex flex-col gap-6">
                            
                        
                        <Link className="flex items-center" href="https://www.facebook.com/profile.php?id=61565403706355" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                </svg>
                                <h1 className="text-xl">Facebook</h1>
                            </Link>
                            <Link className="flex items-center" href="https://www.instagram.com/aitskadapa/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                </svg>
                                <h1 className="text-xl">Instagram</h1>
                            </Link>
                            <Link className="flex items-center" href="https://www.youtube.com/@AITKKadapa" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                                </svg>
                                <h1 className="text-xl">Youtube</h1>
                            </Link>
                            </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-r from-white to-gray-100 shadow-2xl rounded-2xl p-10 mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Send a Message</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-purple-500 outline-none bg-gradient-to-r from-gray-50 to-gray-100" />
                        <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none bg-gradient-to-r from-gray-50 to-gray-100" />
                        <textarea placeholder="Your Message" rows="4" className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 outline-none bg-gradient-to-r from-gray-50 to-gray-100 md:col-span-2"></textarea>
                        <button type="submit" className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-8 rounded-xl text-lg font-medium shadow-lg hover:scale-105 transition-all duration-300 md:col-span-2">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}