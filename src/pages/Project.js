import Layout from "@/components/Layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../../config";
import ProjectItem from "@/components/ProjectItem";
export default function Project({ projects }) {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Seongrok Shin Portfolio</title>
                    <meta name="description" content="Seongrok Shin Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-6xl">
                    Total Projects :
                    <span className="pl-4 text-blue-500">{projects.results.length}</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject} />
                    ))}
                </div>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {

    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };

    const getOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        }
    };

    fetch('https://api.notion.com/v1/pages/page_id/properties/property_id', options)

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    const projectsIDs = projects.results.map((aProject) => aProject.id)


    return {
        props: { projects },
    }
}

