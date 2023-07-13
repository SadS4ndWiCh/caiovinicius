import { groq } from "next-sanity";

export const projectsQuery = groq`
*[_type == 'project'] {
  _id,
  title,
  thumb,
  categories[]->{
    title
  },
  description,
  sourceCode,
  demo
} | order(_createdAt desc)
`;

export const aboutQuery = groq`
*[_type == 'about'] {
  summary,
  aboutMe
}[0]
`;