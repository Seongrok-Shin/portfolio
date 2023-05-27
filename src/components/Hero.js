import Skills from "@/pages/Skills"
import Image from "next/legacy/image"
import Link from "next/link"

export default function Hero() {
    return (

        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <title>Seongrok Shin Portfolio</title>
            <meta name="description" content="Seongrok Shin Portfolio" />
            <link rel="icon" href="/favicon.ico" />
            <div className="lg:max-w-lg  md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image className="flex flex-col md:w-1/2 md:pl-12 rounded-md" alt="profile" src="/me.jpg" width={250} height={250} />
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-10 justify-center sm:justify-start p-3" />
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Kia Ora koutou! This is Seongrok Shin.
                </h1>
                <p className="mb-8 leading-relaxed">Who has been nearing completion of my Bachelor of Computer and Information Scienece with Softtware development and Data Science @ Auckland University of Technology</p>
                <div className="flex justify-center ">
                    <Link href="/Project">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Project</button>
                    </Link>
                    <Link href="/Contact">
                        <button className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1JJ7nRLXC8hrmzpI5-zgEXPEuBtiH7nci/view?usp=sharing" target="_blank">
                        <button className="ml-4 inline-flex text-white bg-cyan-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 rounded text-lg">Resume</button>
                    </Link>
                </div>
            </div>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-10 justify-center sm:justify-start p-3" />
            <Skills />
            {/* <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    </div>
                </div> */}
        </section>
    )
}