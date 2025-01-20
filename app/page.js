import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Image from "next/image";
import Link from "next/link";
{/* <div className="flex flex-col md:flex-row items-start justify-between px-4 gap-2 w-full font-medium text-sm md:text-lg bg-blue-100 border-y border-blue-800 p-1 text-blue-900">
        <div className="flex flex-row items-center gap-2">
          <a href="https://maps.app.goo.gl/sKdBzXpZ9PHffowC7" rel="noreferrer" target="_blank">
            <div className="flex flex-row items-center justify-center">
              <span name={"location_on"} />
              <span>Locate Us</span>
            </div>
          </a>
          <a href="mailto:aitskadapa@gmail.com" target="_blank" rel="noreferrer">
            <div className="flex flex-row items-center justify-center">
              <span name={"mail"} />
              <span>aitskadapa@gmail.com</span>
            </div>
          </a>
        </div>
        <div className="flex flex-row items-center">
          <h1>Polycet Code: </h1>
          <span className="text-rose-500 font-black ml-2"> AITK</span>
        </div>
      </div> */}

// font-[family-name:var(--font-geist-sans)]
export default function Home() {

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      <div className="w-full">
        <Image src={"/aitsfull.png"} width={200} height={200} alt="aitsfull" unoptimized priority className="w-full h-max" />
        {/* <div className="m-4 p-4 md:p-8 md:m-8 bg-yellow-200 rounded-3xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 h-max bg-white text-center rounded-3xl overflow-hidden">
            <Image src={"/chairman.webp"} width={200} height={200} alt="Chairman" unoptimized className="w-full h-max" />
            <h1 className="text-xl font-semibold text-orange-700 mt-4">Sri C. Gangi Reddy Garu</h1>
            <h2 className="text-lg mb-4">Honorable Secretary</h2>
          </div>
          <div className="md:w-2/3 text-sm md:text-base">
            <div className="m-2 md:m-8 text-justify">
              <p><strong>Sri C. Gangi Reddy Garu</strong> served the Government of Andhra Pradesh with distinction as a Sub-Registrar in the Registration Department and as the District Registrar for Ranga Reddy district before his voluntary retirement in 2009. His deep belief in the transformative power of education led him to dedicate his life to building educational institutions that serve the underprivileged, especially in rural areas. His contributions have earned him several prestigious awards, including the “Rayalaseema Ratna” from the State Government of Andhra Pradesh and the “Edupreneur Award 2013,” presented by Dr. Shashi Tharoor, former Union Minister of State for HRD.
              </p>
            </div>
            <div className="m-2 md:m-8 text-justify">
              <h1 className="text-xl font-bold text-orange-700">Message from Honorable Secretary:</h1>
              <p className="bg-white m-1 md:m-2 p-4 md:p-8 rounded-3xl">“I take great pleasure in welcoming you to the website of Annamacharya Institute of Technology and Sciences, Kadapa. Education is the key to self-enlightenment and empowerment. It bridges the socio-economic divide, especially in rural regions, by providing the necessary skills and knowledge for progress. I am proud to offer opportunities for students to pursue their studies at AITS Kadapa, located in an area that serves both rural and urban aspirants. The success of our institution is a result of the tireless efforts of our dedicated staff and faculty. I encourage them to continue striving for excellence, ensuring AITS remains one of the leading institutes in the country. I also extend my heartfelt gratitude to the students and their families for their unwavering support in this educational journey. I wish all our students the very best in their academic endeavors.”
              </p>
            </div>
          </div>
        </div> */}
        <div className="w-full bg-gradient-to-br from-cyan-700 to-cyan-900 p-10 md:p-16 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide border-b-4 border-white pb-4 mb-6 inline-block">
              About the Annamacharya Group
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-relaxed font-light text-justify md:text-center font-[var(--font-geist-sans)]">
              Annamacharya Educational Trust was founded in the year <span className="font-semibold text-yellow-400">1997</span>
              by a group of highly educated and service-minded individuals with a noble intention of providing professional
              and higher education to students coming from backward rural areas of Rayalaseema.
            </p>

            <p className="mt-6 text-lg md:text-xl leading-relaxed font-light text-justify md:text-center font-[var(--font-geist-sans)]">
              The motto of the trust is:
              <span className="font-semibold text-yellow-400"> “Vidvan Sarvatra Pujyathe.” </span>
              The Educational Trust was registered in <span className="font-semibold text-yellow-400">1997</span> with Regd. No.
              <span className="font-semibold text-yellow-400"> 135/IV/97</span> with its headquarters in Hyderabad.
              This Trust, the promoting body, established colleges in
              <span className="text-yellow-400"> Rajampet, Kadapa District, Piglipur, Ranga Reddy District,</span> and
              <span className="text-yellow-400"> Tirupati, Chittor District.</span>
            </p>

            <p className="mt-6 text-lg md:text-xl leading-relaxed font-light text-justify md:text-center font-[var(--font-geist-sans)]">
              The mission of the Annamacharya Educational Trust is to provide
              <span className="font-semibold text-yellow-400"> quality education</span> to the needy students of
              the Rayalaseema region. The Trust aims to expand further by establishing more technical and non-technical
              institutions in <span className="text-yellow-400">Andhra Pradesh.</span>
            </p>
          </div>
        </div>
        <div className="bg-white p-8 font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-xl text-center text-gray-500">POLYTECHNIC COURSES OFFERED</h1>
          <div className="flex flex-wrap justify-center gap-6 p-6">
            {/* DCME - Computer Engineering */}
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

            {/* DECE - Electronics & Communication */}
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

            {/* DEEE - Electrical & Electronics */}
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
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 py-16 px-6">
          <div className="container mx-auto flex flex-wrap justify-center gap-8">

            {/* Stats Card 1 */}
            <div className="w-64 p-8 bg-white/70 backdrop-blur-lg shadow-xl rounded-xl text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-md">3</h1>
              <p className="text-lg font-semibold text-gray-800 mt-2 tracking-wide">Departments</p>
            </div>

            {/* Stats Card 2 */}
            <div className="w-64 p-8 bg-white/70 backdrop-blur-lg shadow-xl rounded-xl text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-md">20+</h1>
              <p className="text-lg font-semibold text-gray-800 mt-2 tracking-wide">Labs</p>
            </div>

            {/* Stats Card 3 */}
            <div className="w-64 p-8 bg-white/70 backdrop-blur-lg shadow-xl rounded-xl text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-md">50+</h1>
              <p className="text-lg font-semibold text-gray-800 mt-2 tracking-wide">Faculties</p>
            </div>

            {/* Stats Card 4 */}
            <div className="w-64 p-8 bg-white/70 backdrop-blur-lg shadow-xl rounded-xl text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-md">100+</h1>
              <p className="text-lg font-semibold text-gray-800 mt-2 tracking-wide">Students</p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
