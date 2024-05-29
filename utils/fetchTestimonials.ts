import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "testimonials"]`
;

export const fetchTestimonials = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};