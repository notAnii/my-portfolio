interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _key: string;
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

interface Block {
    _key: string;
    _type: "block";
    children: {
        _key: string;
        _type: "span";
        marks: [];
        text: string;
    }[];
    markDefs: [];
    style: string;

}

interface Slug {
    _type: "slug";
    current: string;
}

export interface BentoInfo extends SanityBody {
    _type: "bento";
    grid1: Image;
    techStack: string[];
    insideScoop: string;
}

export interface ContactInfo extends SanityBody {
    _type: "contact";
    title: string;
    url: string;
}

export interface ExperienceInfo extends SanityBody {
    _type: "experience";
    title: string;
    description: string;
    company: string;
    duration: string;
    thumbnail: Image;
}

export interface ProjectInfo extends SanityBody {
    _type: "projects";
    title: string;
    description: string;
    image: Image;
    iconLists: Image[];
    link: string;
}

export interface TestimonialInfo extends SanityBody {
    _type: "testimonials";
    name: string;
    title: string;
    quote: string;
    photo: Image;
    companyLogo: Image;
}