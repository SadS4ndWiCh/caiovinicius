import { Heading } from "@components/Heading";
import { Text } from "@components/Text";

type Props = {
	about: string;
}

export const About = ({ about }: Props) => {
	return (
    <section id='about' className="mt-16 md:mt-24">
			<Heading size='lg'>
				About
			</Heading>
			<Text asChild>
				<p className="mt-3">{ about }</p>
			</Text>
		</section>
	)
}