import { cachedClient } from "src/sanity/lib/client";
import { aboutQuery, projectsQuery } from "src/sanity/lib/queries";
import { IProject } from "src/types";
import { About } from "~/components/layout/About";
import { Introduction } from "~/components/layout/Introduction";
import { Projects } from "~/components/layout/Projects";

type About = {
  summary: string;
  aboutMe: string;
}

export default async function Home() {
  const projects: IProject[] = await cachedClient(projectsQuery);
  const about: About = await cachedClient(aboutQuery);

  return (
    <>
      <Introduction summary={about.summary} />
      <Projects projects={projects} />
      <About about={about.aboutMe} />
    </>
  )
}