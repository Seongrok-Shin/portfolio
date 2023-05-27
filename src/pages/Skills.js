import React from 'react';
import {
    SiJavascript, SiHtml5, SiPhp, SiCss3, SiPython, SiMysql, SiReact, SiGit
    , SiBootstrap, SiTailwindcss, SiExpo
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import '../app/global.css'

function Skills() {
    return (
        <>
            <h1>My Skills</h1>
            <div className="flex flex-row items-center justify-center">
                <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <SiHtml5 className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '80%' }} />
                    </div>
                    <SiJavascript className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '70%' }} />
                    </div>
                    <SiPhp className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '70%' }} />
                    </div>
                    <SiMysql className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '60%' }} />
                    </div>
                    <SiReact className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '70%' }} />
                    </div>
                    <SiExpo className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '70%' }} />
                    </div>
                    <SiBootstrap className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '80%' }} />
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <TbBrandNextjs className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '50%' }} />
                    </div>
                    <TbBrandReactNative className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '70%' }} />
                    </div>
                    <SiCss3 className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '80%' }} />
                    </div>
                    <SiGit className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '90%' }} />
                    </div>
                    <SiPython className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '70%' }} />
                    </div>
                    <FaJava className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '85%' }} />
                    </div>
                    <SiTailwindcss className='p-1 w-10 h-10' />
                    <div className="bg-gray-200 w-20 h-2 mt-2 mb-4 rounded-full">
                        <div className='bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full' style={{ width: '60%' }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;