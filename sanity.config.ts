import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";


import { apiVersion, projectId, dataset } from "./sanity/env";
import Form from "./sanity/Form";


export default defineConfig({
  name: "default",
  title: "Builder Form",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [Form],
  },
});
