import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {apiVersion, dataset, projectId} from "./sanity/env";
import {schemaTypes} from "./sanity/schemaTypes";

export default defineConfig({
  name: "elmassa_itinerary",
  title: "El Massa Itinerary",
  projectId,
  dataset,
  basePath: "/studio",
  apiVersion,
  plugins: [structureTool(), visionTool({defaultApiVersion: apiVersion})],
  schema: {types: schemaTypes},
});
