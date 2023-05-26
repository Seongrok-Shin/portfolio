export default function MySkill() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">My Skill</h1>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-300 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">HTML</h2>
                                <p className="leading-relaxed text-base">I have been using HTML for my web development projects and assignments.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-300 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M4 4l11.88 11.88"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">CSS</h2>
                                <p className="leading-relaxed text-base">I have been using CSS for my web development projects and assignments.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-300 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M7 12H17"></path>
                                        <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">JavaScript</h2>
                                <p className="leading-relaxed text-base">I have been using JavaScript for my web development projects and assignments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}