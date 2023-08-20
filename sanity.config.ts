import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "of9c98lx",
  dataset: "production",
  title: "Blog",
  apiVersion: "2023-08-20",
  basePath: "/admin",
  plugins: [deskTool()],
  useCdn: false,
  schema: {types: schemas}
})

export default config