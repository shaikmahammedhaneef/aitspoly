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
        <div className="m-4 p-4 md:p-8 md:m-8 bg-yellow-200 rounded-3xl flex flex-col md:flex-row items-center">
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
        </div>
        <div className="w-full text-center p-8">
          <h1 className="text-5xl">Vision</h1>
          <p className="m-2 my-8 text-2xl">"Empowering students to become highly skilled, innovative, and ethical technicians, equipped to excel in their chosen fields and contribute to the betterment of society."</p>
          <h1 className="text-5xl">Mission</h1>
            <div className="p-4 m-4 text-2xl">M1: Foster employability, higher education, and research by providing high-quality technical education that enhances knowledge and skills.</div>
            <div className="p-4 m-4 text-2xl">M2: Enhance teaching and research capabilities through investment in quality infrastructure and resources.</div>
            <div className="p-4 m-4 text-2xl">M3: Empower rural students with technical skills, ethics, innovation, and leadership, enabling them to contribute to sustainable national development and the betterment of society."</div>
        </div>
        <div>
          <div className="w-full bg-yellow-100 flex flex-row justify-around items-center p-8">
            <div className="bg-white p-4 size-32 rounded-full flex flex-col items-center justify-center">
              <h1 className="text-red-500 font-bold text-3xl">3</h1>
              <p>Departments</p>
            </div>
            <div className="bg-white p-4 size-32 rounded-full flex flex-col items-center justify-center">
              <h1 className="text-red-500 font-bold text-3xl">20+</h1>
              <p>Labs</p>
            </div>
            <div className="bg-white p-4 size-32 rounded-full flex flex-col items-center justify-center">
              <h1 className="text-red-500 font-bold text-3xl">50+</h1>
              <p>Faculties</p>
            </div>
            <div className="bg-white p-4 size-32 rounded-full flex flex-col items-center justify-center">
              <h1 className="text-red-500 font-bold text-3xl">100+</h1>
              <p>Students</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
