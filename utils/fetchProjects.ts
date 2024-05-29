import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "projects"]`
;

export const fetchProjects = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};