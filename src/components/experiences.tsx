import { experiences } from "~/config/experiences";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium'
})

export function Experiences() {
  return (
    <ul>
      {experiences.map((experience, idx) => (
        <li key={idx} className="relative ml-4 pl-4 pb-4 border-l border-border">
          <div className="absolute w-4 h-4 rounded-full bg-background border border-border left-0 -translate-x-1/2" />

          <h3>{experience.company}</h3>
          <p className="text-muted-foreground my-2">{experience.description}</p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={experience.startsAt}>
              {dateFormatter.format(new Date(experience.startsAt))}
            </time>

            {experience.endsAt && (
              <>
                <span>&bull;</span>
                <time dateTime={experience.endsAt}>
                  {dateFormatter.format(new Date(experience.endsAt))}
                </time>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}