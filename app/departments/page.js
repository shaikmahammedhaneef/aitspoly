import Footer from "@/components/main/Footer";
import NavBar from "@/components/main/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Departments() {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col">
            <NavBar />
            <div className="p-8 text-center">
                <h1 className="text-5xl">Departments</h1>
                <div className="flex flex-row mt-8 items-center gap-8">
                    <Link href={"/departments/eee"} className="bg-white rounded-xl overflow-hidden w-1/3 shadow">
                            <Image src={"/eee.png"} width={200} height={200} alt="eee" unoptimized className="w-full " />
                            <h1 className="text-xl my-4">Electrical & Electronics Engineering</h1>
                    </Link>
                    <Link href={"/departments/ece"} className="bg-white rounded-xl overflow-hidden w-1/3 shadow">
                            <Image src={"/ece.png"} width={200} height={200} alt="ece" unoptimized className="w-full " />
                            <h1 className="text-xl my-4">Electronics & Communication Engineering</h1>
                    </Link>
                    <Link href={"/departments/cme"}  className="bg-white rounded-xl overflow-hidden w-1/3 shadow">
                            <Image src={"/cme.png"} width={200} height={200} alt="cme" unoptimized className="w-full " />
                            <h1 className="text-xl my-4">Computer Engineering</h1>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}