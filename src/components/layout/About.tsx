import { Heading } from "~/components/ui/Heading";
import { Text } from "~/components/ui/Text";


type Props = {
  about: string;
}

export const About = ({ about }: Props) => {
  return (
    <section
      id='about'
      className="container mx-auto mt-16 md:mt-24"
    >
      <Heading asChild size='lg'>
        <h2>
          About
        </h2>
      </Heading>
      <Text asChild>
        <p
          className="mt-3"
        >
          {about}
        </p>
      </Text>
    </section>
  )
}