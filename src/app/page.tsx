import { getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="">
      <h1>Mi blog</h1>
      {
        projects.map((project: any) => (
          <div className="" key={project.id}>
            <h1>{project.name}</h1>
          </div>
      ))
      }
    </div>
  )
}