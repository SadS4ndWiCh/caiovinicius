import { Heading } from '~/components/ui/Heading';
import { Text } from '~/components/ui/Text';
import { Socials } from '../Socials';

type Props = {
  summary: string;
}

export const Introduction = ({ summary }: Props) => {
  return (
    <section
      id='introduction'
      className='container flex flex-col justify-center lg:mx-auto min-h-screen'
    >
      <div className='sm:max-w-[553px]'>
        <Heading asChild size='lg'>
          <h1
            className='leading-tight text-center text-heading whitespace-pre-line sm:text-5xl sm:text-left'
          >
            I&apos;m <span className='text-transparent bg-clip-text bg-identity'>Caio Vinícius</span>{'\n'}
            an 18 year old Brazilian{'\n'}
            <span className='text-transparent bg-clip-text bg-identity'>web developer</span>
          </h1>
        </Heading>

        <Text asChild>
          <p className='mt-3 md:text-left'>
            {summary}
          </p>
        </Text>
      </div>

      <Socials />
    </section>
  )
};