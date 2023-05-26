import Image from "next/legacy/image";
import React from "react";
import { Typography } from "@material-tailwind/react";
export default function ProjectItems() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
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
                    </React.Fragment>
                </div>
                <div class="flex flex-col md:w-1/2 md:pl-12">
                    <Image src="/me.jpg" className="h-96 w-96 rounded-full" alt="project1" width={720} height={720} />
                </div>
            </div>
            <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <Image src="/me.jpg" className="h-96 w-96 rounded-full" alt="project1" width={720} height={720} />
                </div>
                <div class="flex flex-col md:w-1/2 md:pl-12">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Team Project</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Date: 22 Aug 2022 – 26 Oct 2022</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Used Language: React Native with Expo</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Catch Up APP - Backend</h1>
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
                    </React.Fragment>
                </div>
            </div>
            <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Team Project</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Date: 20 Aug 2022 – 21 Aug 2022</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Used Language: Python</h2>
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
                    </React.Fragment>
                </div>
                <div class="flex flex-col md:w-1/2 md:pl-12">
                    <Image src="/me.jpg" className="h-96 w-96 rounded-full" alt="project1" width={720} height={720} />
                </div>
            </div>
        </section>
    );
}