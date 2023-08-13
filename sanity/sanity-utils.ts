import { createClient, groq } from "next-sanity"


export async function getProjects() {
    const client = createClient(
        {
            projectId: "of9c98lx",
            dataset: "production",
            apiVersion: "2023-03-04"
        }
    )

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            content
        }`
    )
}

export async function getProject(slug: string) {
    const client = createClient(
        {
            projectId: "of9c98lx",
            dataset: "production",
            apiVersion: "2023-03-04"
        }
    )

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            content
        }`,
        {slug}
    )
}