import { formatDate } from "@/components/formatDate"
import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
    params: {project: string}
}

export default async function Project({params}: Props){
    const slug = params.project

    const project = await getProject(slug)
  
    if (!project) {
        return <div className="">Project not found</div>;
    }

    return (
        <>
            <div className="text-white-600 max-w-screen-xl m-auto">
                <div className="">
                    <h1 className="font-semibold text-xs uppercase lg:text-5xl">{project.name}</h1>
                    <span>Publicado: {formatDate(project._createdAt)}</span>
                    <div className="">
                        <PortableText value={project.content}/>
                    </div>
                </div>
            </div>
        </>
    )
}