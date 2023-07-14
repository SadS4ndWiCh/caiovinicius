import { About } from '~/components/about'
import { Projects } from '~/components/projects'
import { Socials } from '~/components/socials'
import { Separator } from '~/components/ui/separator'

export default async function Home() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto p-4">
      <section className="mt-4 space-y-2">
        <h1 className="text-white font-bold text-xl">Caio Vinícius</h1>
        <p className="text-slate-300 leading-relaxed">
          Web developer with product design experience and passion for
          front-end. Proficient in Python, Javascript and C#. Studying Analisys
          and System Development. Continuous self-improvement and internship
          experience. Dedicated and driven.
        </p>

        <Socials />
      </section>

      <Separator className="my-6 bg-slate-800" />

      <section className="flex-1 space-y-2">
        <h2 className="text-white text-xl font-bold">Projects</h2>

        <Projects />
      </section>

      <Separator className="my-6 bg-slate-800" />

      <section className="space-y-2">
        <h2 className="text-white text-xl font-bold">About me</h2>

        <About />
      </section>
    </div>
  )
}
