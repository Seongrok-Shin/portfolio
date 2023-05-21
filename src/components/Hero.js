import Image from "next/legacy/image"
import Link from "next/link"
export default function Hero() {
    return (
        <>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image className="object-cover object-center rounded-full" alt="profile" src="/me.jpg" width={500} height={200} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi dear,
                            <br className="hidden lg:inline-block" />this is Seongrok Shin.
                        </h1>
                        <p className="mb-8 leading-relaxed">Who has been nearing completion of my Bachelor of Computer and Information Scenece with Softtware development and Data Sceince @ Auckland University of Technology</p>
                        <div className="flex justify-center">
                            <Link href="/Project">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Project</button>
                            </Link>
                            <Link href="/Contact">
                                <button className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}