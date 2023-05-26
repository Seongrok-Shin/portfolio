import Image from "next/legacy/image";
import React from "react";
import { useState } from "react";
import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody
} from "@material-tailwind/react";

export default function ProjectItem() {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(cur => !cur);
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="sm:w-full lg:w-full xl:w-1/3 snap-y p-4 md:w-full">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg">
                            <Image className="lg:h-30 md:h-30 w-full object-cover object-center rounded-lg" src="/me.jpg" alt="blog" width={980} height={700}></Image>
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Team Project</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Catch Moles Game - Game part</h1>
                                <div className="p-3"></div>
                                <React.Fragment>
                                    <Button className=" bg-red-800" onClick={toggleOpen}>Description</Button>
                                    <Collapse open={open}>
                                        <div className="p-3"></div>
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
                                    </Collapse>
                                </React.Fragment>
                                <div className="p-3"></div>
                                <div className="flex items-center flex-wrap">
                                    <a href="https://github.com/Seongrok-Shin/catchMoles_GUIV/tree/main" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">GitHub
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-full lg:w-full xl:w-1/3 snap-y p-4 md:w-full">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg">
                            <Image className="lg:h-30 md:h-30 w-full object-cover object-center rounded-lg" src="/me.jpg" alt="blog" width={980} height={700}></Image>
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Team Project</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Catch Up APP - Backend</h1>
                                <div className="p-3"></div>
                                <React.Fragment>
                                    <Button className=" bg-red-800" onClick={toggleOpen}>Description</Button>
                                    <Collapse open={open}>
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
                                    </Collapse>
                                </React.Fragment>
                                <div className="p-3"></div>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://github.com/Seongrok-Shin/Catch-Up" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 justify-end">GitHub
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-full lg:w-full xl:w-1/3 snap-y p-4 md:w-full">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg">
                            <Image className="lg:h-30 md:h-30 w-full object-cover object-center rounded-lg" src="/me.jpg" alt="blog" width={980} height={700}></Image>
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Team Project</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Pipe Watch(Winner of GovHack2022) - Backend</h1>
                                <div className="p-3"></div>
                                <React.Fragment>
                                    <Button className=" bg-red-800" onClick={toggleOpen}>Description</Button>
                                    <Collapse open={open}>
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
                                    </Collapse>
                                </React.Fragment>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://github.com/Seongrok-Shin/govhack-2022-backend" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">GitHub
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
