import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/project';
import Link from 'next/link';

export default async function Home() {
  const projects: Project[] = await getProjects()

  return (
    <div className="">
      <h1>Mi blog</h1>
      {
        projects.map((project: Project) => (
          <Link href={`${project.slug}`} key={project._id}>
            <div className="">
            <h1>{project.name}</h1>
          </div>
          </Link>
      ))
      }
    </div>
  )
}