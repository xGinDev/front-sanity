import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/project';
import Link from 'next/link';

export default async function ListArticles() {
    const projects = await getProjects()
    console.log(projects)

    return (
        <div className="grid lg:grid-cols-4 gap-4">
            {
                projects.map((project: Project) => (
                    <Link href={`${project.slug}`} key={project._id}>
                        <div className="relative h-full group cursor-pointer overflow-hidden border rounded-lg text-left border-scale-500 hover:border-scale-700 bg-white dark:bg-scale-300 transition">
                            <article className="flex max-w-xl flex-col items-start justify-between p-8">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <p>Publicado: {project._createdAt}</p>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6">
                                        <p>
                                            {project.name}
                                        </p>
                                    </h3>
                                    <p className="line-clamp-3 text-sm leading-6">{project.description}</p>
                                </div>
                                <div className="relative flex items-center gap-x-4">
                                    <p>Ver más</p>
                                </div>
                            </article>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}