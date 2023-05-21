import Layout from "@/components/Layout";
import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Seongrok Shin Portfolio</title>
        <meta name="description" content="Seongrok Shin Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Layout >
  );
}