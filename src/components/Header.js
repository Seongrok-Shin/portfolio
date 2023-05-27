import Link from "next/link";
import Image from "next/image";
import '../app/global.css'
export default function Header() {
    return (
        <header className="text-black body-font bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src="/mForMarkAndLikeFox.png" alt="logo" className="object-cover object-center" width={50} height={50}></Image>
                    <span className="ml-3 text-xl text-black">Seongrok Shin</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/Project" className="mr-5 hover:text-gray-900">
                        Project
                    </Link>
                    <Link href="/Contact" className="mr-5 hover:text-gray-900">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}