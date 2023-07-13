import { Heading } from "~/components/ui/Heading";
import { Text } from "~/components/ui/Text";
import { ICategory } from "~/types";
import { Tags } from "./Tags";

type Props = {
  data: {
    tags: ICategory[];
    name: string;
    description: string;
  }
};

export const Header = ({ data }: Props) => {
  return (
    <>
      <header>
        <Tags tags={data.tags.map(category => category.title)} />

        <Heading asChild size='md'>
          <h3
            className='mt-1'
          >
            {data.name}
          </h3>
        </Heading>
      </header>

      <Text asChild>
        <p className='mt-4'>
          {data.description}
        </p>
      </Text>
    </>
  )
}