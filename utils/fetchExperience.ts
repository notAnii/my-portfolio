import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "experience"] | order(endDate desc, isCurrentPosition) `;

export const fetchExperience = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};
