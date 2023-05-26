import Layout from "@/components/Layout";
import Script from "next/script";
export default function Contact() {
    return (
        <>
            <Layout>
                <Script src="https://cdn.tailwindcss.com"></Script>
                <div>
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <p>Contact Page</p>
                </div>
            </Layout>
        </>
    );
}