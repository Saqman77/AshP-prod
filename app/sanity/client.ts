import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "s8l122e7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});