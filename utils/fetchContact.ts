import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "contact"]`;

export const fetchContact = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};