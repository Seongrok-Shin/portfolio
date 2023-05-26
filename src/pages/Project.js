import Layout from "@/components/Layout";
import ProjectItems from "@/components/ProjectItems";
import Head from "next/head";
import Script from "next/script";
export default function Project() {
    return (
        <div>
            <Script src="https://cdn.tailwindcss.com"></Script>
            <Layout>
                <Head>
                    <title>Seongrok Shin Portfolio</title>
                    <meta name="description" content="Seongrok Shin Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <ProjectItems />
            </Layout>
        </div>
    );
}