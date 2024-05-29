import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "bento"] | order(id)`;

export const fetchBento = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};