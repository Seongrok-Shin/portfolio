import Layout from "@/components/Layout";
import Script from "next/script";
export default function About() {
    return (
        <>
            <Layout>
                <div>
                    <Script src="https://cdn.tailwindcss.com"></Script>
                    <p>About Page</p>
                </div>
            </Layout>
        </>
    );
}