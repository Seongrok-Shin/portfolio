import React from 'react';
import Layout from "@/components/Layout";
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import '../app/global.css'
const Contact = () => {

    const form = useRef()

    // send mail
    const onSubmitForm = (event) => {
        event.preventDefault()

        try {
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_MAIL_SERVER_KEY,
                process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY,
                form.current,
                process.env.NEXT_PUBLIC_MAIL_USER_ID
            )
            toast.success('Thank you for email me.', {
                position: toast.POSITION.TOP_CENTER,
                icon: '💌',
                hideProgressBar: true,
                className: 'toast-message'
            })
        } catch (error) {
            toast.error('Failed to email me. ', {
                position: toast.POSITION.TOP_CENTER,
                icon: '🥲',
                hideProgressBar: true,
                className: 'toast-message'
            })
        }
    }
    return (
        <>
            <title>Seongrok Shin Portfolio</title>
            <meta name="description" content="Seongrok Shin Portfolio" />
            <link rel="icon" href="/favicon.ico" />
            <Layout>
                <section className="text-gray-600 body-font relative">
                    <form ref={form} onSubmit={onSubmitForm}>
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">If you have any questions, please feel free to contact me.</p>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                    </div>
                                    <ToastContainer />
                                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                        <a className="text-indigo-500">

                                        </a>
                                        <span className="inline-flex">
                                            <a className="text-gray-500">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M22 2L11 13" />
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                            </a>
                                            <a className="ml-4 text-gray-500">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M16 12a4 4 0 01-8 0V9a4 4 0 018 0v3z" />
                                                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                                                    <path d="M16 3.13a4 4 0 00-7.33 0" />
                                                    <path d="M1 21v-2a4 4 0 014-4h2a4 4 0 014 4v2" />
                                                </svg>
                                            </a>
                                            <a className="ml-4 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                                    <path d="M8 2L8 6" />
                                                    <path d="M16 2L16 6" />
                                                    <path d="M2 10L6 10" />
                                                    <path d="M2 14L6 14" />
                                                    <path d="M2 18L6 18" />
                                                    <path d="M10 22L10 18" />
                                                    <path d="M14 22L14 18" />
                                                    <path d="M18 22L18 18" />
                                                </svg>

                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </Layout>
        </>
    );
}

export default Contact;
