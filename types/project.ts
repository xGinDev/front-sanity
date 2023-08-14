import { PortableTextBlock } from 'sanity'

export type Project = {
    _id: string,
    _createdAt: string,
    name: string,
    description: string,
    slug: string,
    content: PortableTextBlock[];
}