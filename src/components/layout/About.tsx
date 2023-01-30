import { motion } from "framer-motion";

import { useInViewAnimation } from "@hooks/useInViewAnimation";

import { Heading } from "@components/ui/Heading";
import { Text } from "@components/ui/Text";

type Props = {
	about: string;
}

const variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const About = ({ about }: Props) => {
	const { ref, controls } = useInViewAnimation({
		animationVariantName: 'visible',
		options: {
			threshold: .1
		}
	});

	return (
    <section
			id='about'
			className="container mx-auto mt-16 md:mt-24"
		>
			<Heading asChild size='lg'>
				<motion.h2
					ref={ref}
					initial='hidden'
					animate={controls}
					variants={variants}
					transition={{
						duration: 1,
					}}
				>
					About
				</motion.h2>
			</Heading>
			<Text asChild>
				<motion.p
					ref={ref}
					initial='hidden'
					animate={controls}
					variants={variants}
					transition={{
						delay: .25,
						duration: 1,
					}}
					className="mt-3"
				>
					{ about }
				</motion.p>
			</Text>
		</section>
	)
}