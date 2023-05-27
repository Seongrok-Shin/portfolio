import Image from "next/legacy/image";
import React from "react";
import { Carousel, Typography, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function ProjectItems() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Team Project</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Date: 28 May 2022 – 04 June 2022</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Used Language: Java</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Catch Moles Game - Game part</h1>
                    <React.Fragment>
                        <Typography className="text-black font-serif">
                            The Catch Moles Game was a team project developed in Java that involved creating a game with two versions: a command-line user interface (CUI) and a graphical user interface (GUI).
                        </Typography>
                        <Typography className="text-black font-serif">
                            Our team was initially tasked with creating the CUI version of the game, which was a relatively smooth process given our familiarity with it from university.
                        </Typography>
                        <Typography className="text-black font-serif">
                            However, transitioning to the GUI version proved to be a challenge as it was a new concept to us.
                        </Typography>
                        <Typography className="text-black font-serif">
                            In order to successfully develop the GUI version, extensive research was conducted on image display and system-building techniques such as game panels. Through this research, I acquired the knowledge and skills needed to build a functional and engaging graphical version of the game.
                        </Typography>
                        <Typography className="text-black font-serif">
                            The final version of the Catch Moles Game includes several features, such as a login system that stores user information, a scoring system that ranks users based on their performance, and a hammer that players use to catch moles. The game is fully functional and provides an enjoyable gaming experience for users.
                        </Typography>
                        <Link legacyBehavior className=" translate-x-0" href="https://github.com/Seongrok-Shin/catchMoles_GUIV">
                            <a>
                                <FaGithub size={40} />
                            </a>
                        </Link>
                    </React.Fragment>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12 scroll-container overflow-y-auto rounded-full">
                    <Carousel
                        className="rounded-xl"
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="gray"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 -translate-y-2/4 left-4"
                            >
                                <FaArrowCircleLeft strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="gray"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 -translate-y-2/4 !right-4"
                            >
                                <FaArrowCircleRight strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                    >
                        <Image src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="h-96 w-96 rounded-full" alt="project1" width={720} height={720} />
                    </Carousel>
                </div>
            </div>
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <Carousel
                        className="rounded-xl"
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="gray"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 -translate-y-2/4 left-4"
                            >
                                <FaArrowCircleLeft strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="gray"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 -translate-y-2/4 !right-4"
                            >
                                <FaArrowCircleRight strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                    >
                        <Image src="/catchUp1.jpg" alt="catchUPP1" width={538} height={720} />
                        <Image src="/catchUp2.jpg" alt="catchUPP2" width={538} height={720} />
                        <Image src="/catchUp3.jpg" alt="catchUPP3" width={538} height={720} />
                        <Image src="/catchUp4.jpg" alt="catchUPP4" width={538} height={720} />
                        <Image src="/catchUp5.jpg" alt="catchUPP5" width={538} height={720} />
                        <Image src="/catchUp6.jpg" alt="catchUPP6" width={538} height={720} />
                        <Image src="/catchUp7.jpg" alt="catchUPP7" width={538} height={720} />
                        <Image src="/catchUp8.jpg" alt="catchUPP8" width={538} height={720} />

                    </Carousel>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Team Project</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Date: 22 Aug 2022 – 26 Oct 2022</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Used Language: React Native with Expo, Firebase</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Catch Up APP</h1>
                    <div className="p-3"></div>
                    <React.Fragment>
                        <div className="p-3"></div>
                        <Typography className="text-black font-serif">
                            This team project was developed using the React Native Framework and served as an opportunity for me to learn project management methodologies such as Agile.
                        </Typography>
                        <Typography className="text-black font-serif">
                            However, I encountered difficulties due to my unfamiliarity with project management practices.
                        </Typography>
                        <Typography className="text-black font-serif">
                            Through extensive research, I was able to overcome these challenges by learning time management and estimation techniques.
                        </Typography>
                        <Typography className="text-black font-serif">
                            Furthermore, the team encountered a significant obstacle as none of the members had prior experience with React Native and Firebase. Despite this, we were able to upskill and increase our proficiency over time. Through this process, I gained valuable experience in using React Native and Firebase and honed my project management skills.
                        </Typography>
                        <Typography className="text-black font-serif">
                            In particular, working with Firebase to manage databases and using APIs to develop chat systems and filter systems were particularly engaging tasks. Overall, this project provided an excellent opportunity to learn and grow as a developer and project manager.
                        </Typography>
                        <Link legacyBehavior href="https://github.com/Seongrok-Shin/Catch-Up">
                            <a>
                                <FaGithub size={40} />
                            </a>
                        </Link>
                    </React.Fragment>
                </div>
            </div>
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Team Project</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Date: 20 Aug 2022 – 21 Aug 2022</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Used Language: Python, Django Framework</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Pipe Watch(Winner of GovHack2022) - Backend</h1>
                    <div className="p-3"></div>
                    <React.Fragment>
                        <div className="p-3"></div>
                        <Typography className="text-black font-serif">
                            This team project emerged as the winner of the Community design for flood mitigation competition hosted by GovHack 2022.
                        </Typography>
                        <Typography className="text-black font-serif">
                            The project utilized Python on the back end to produce APIs for use in the Frontend.
                        </Typography>
                        <Typography className="text-black font-serif">
                            Initially, I faced challenges in determining the appropriate data to showcase, as the data files were in different formats and some were unusable.
                        </Typography>
                        <Typography className="text-black font-serif">
                            Despite these obstacles, our team persevered and eventually identified and selected the most appropriate data for our project.
                        </Typography>
                        <Typography className="text-black font-serif">
                            Through the use of extraction, transformation, and loading (ETL) techniques via Python, we were able to develop APIs that updated the server and enabled the Frontend to operate seamlessly.
                        </Typography>
                        <Typography className="text-black font-serif">
                            The development of these APIs also provided valuable experience in the use of Python and in understanding the intricacies of ETL processes.
                        </Typography>
                        <Typography className="text-black font-serif">
                            Overall, this project served as an excellent opportunity to develop new skills and hone existing ones, and as a result, our team emerged as the winners of the competition.
                        </Typography>
                        <Link legacyBehavior className=" translate-x-0" href="https://github.com/Seongrok-Shin/govhack-2022-backend">
                            <a>
                                <FaGithub size={40} />
                            </a>
                        </Link>
                        <Link legacyBehavior className=" translate-x-1" href="https://www.youtube.com/watch?v=jlI5YnXXx74">
                            <a>
                                <FaYoutube size={40} />
                            </a>
                        </Link>
                    </React.Fragment>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12 scroll-container overflow-y-auto">
                    <Carousel
                        className="rounded-xl"
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 -translate-y-2/4 left-4"
                            >
                                <FaArrowCircleLeft strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 -translate-y-2/4 !right-4"
                            >
                                <FaArrowCircleRight strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                    >
                        <Image src="/pipeWatch1.png" className="h-96 w-96" alt="govhackP1" width={720} height={720} />
                        <Image src="/pipeWatch2.png" className="h-96 w-96" alt="govhackP2" width={720} height={720} />
                    </Carousel>
                </div>
            </div>
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <Carousel
                        transition={{ duration: 2 }}
                        className="rounded-xl"
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="gray"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 -translate-y-2/4 left-4"
                            >
                                <FaArrowCircleLeft strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="gray"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 -translate-y-2/4 !right-4"
                            >
                                <FaArrowCircleRight strokeWidth={2} className="w-6 h-6" />
                            </IconButton>
                        )}
                    >
                        <Image src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="h-96 w-96 rounded-full" alt="project1" width={720} height={720} />

                    </Carousel>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">More Project will be updated</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Date: 01 June 2023 – 15 July 2023</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Used Language: PHP, AJAX, React, etc.</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Projects</h1>
                    <div className="p-3"></div>
                    <React.Fragment>
                        <div className="p-3"></div>
                        <Typography className="text-black font-serif">
                            If you would like to see more of my projects, please visit my GitHub page.
                        </Typography>
                        <Link legacyBehavior href="https://github.com/Seongrok-Shin/">
                            <a>
                                <FaGithub size={40} />
                            </a>
                        </Link>
                    </React.Fragment>
                </div>
            </div>
        </section>
    );
}