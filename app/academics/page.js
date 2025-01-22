import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Departments() {
  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col">
      <NavBar />
      <div className="bg-white p-8 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-xl text-center text-gray-500">POLYTECHNIC COURSES OFFERED</h1>
        <div className="flex flex-wrap justify-center gap-6 p-6">
          {/* DCME - Computer Engineering */}
          <Link href={"/academics/cme"}>
            <div className="relative w-60 h-80 rounded-xl shadow-2xl bg-gradient-to-br from-red-500 via-pink-500 to-red-700 text-white flex flex-col items-center justify-between p-6 hover:scale-105 transition-all duration-300">
              <h1 className="text-2xl font-extrabold uppercase tracking-wide">DIPLOMA</h1>
              <span className="text-xl">in</span>
              <h2 className="text-xl font-semibold text-center">Computer Engineering</h2>
              <p className="text-sm font-light text-center opacity-90">
                3-Year Course
              </p>
              <span className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                DCME
              </span>
            </div>
          </Link>

          {/* DECE - Electronics & Communication */}
          <Link href={"/academics/ece"}>
            <div className="relative w-60 h-80 rounded-xl shadow-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-700 text-white flex flex-col items-center justify-between p-6 hover:scale-105 transition-all duration-300">
              <h1 className="text-2xl font-extrabold uppercase tracking-wide">DIPLOMA</h1>
              <span className="text-xl">in</span>
              <h2 className="text-xl font-semibold text-center">Electronics & Communication Engineering</h2>
              <p className="text-sm font-light text-center opacity-90">
                3-Year Course
              </p>
              <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                DECE
              </span>
            </div>
          </Link>

          {/* DEEE - Electrical & Electronics */}
          <Link href={"/academics/eee"}>
            <div className="relative w-60 h-80 rounded-xl shadow-2xl bg-gradient-to-br from-green-500 via-lime-500 to-green-700 text-white flex flex-col items-center justify-between p-6 hover:scale-105 transition-all duration-300">
              <h1 className="text-2xl font-extrabold uppercase tracking-wide">DIPLOMA</h1>
              <span className="text-xl">in</span>
              <h2 className="text-xl font-semibold text-center">Electrical & Electronics Engineering</h2>
              <p className="text-sm font-light text-center opacity-90">
                3-Year Course
              </p>
              <span className="bg-white text-green-600 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                DEEE
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}