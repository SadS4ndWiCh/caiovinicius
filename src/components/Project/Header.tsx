import {
	motion,
	type HTMLMotionProps,
	type AnimationControls
} from 'framer-motion';

import { Text } from "@components/ui/Text";
import { Heading } from "@components/ui/Heading";
import { Tags } from "./Tags";

type Props = HTMLMotionProps<'footer'> & {
	data: {
		tags: Category[];
		name: string;
		description: string;
	}
	controls: AnimationControls;
};

export const Header = ({ controls, variants, data }: Props) => {
	return (
		<>
			<motion.header
				initial='hidden'
				animate={controls}
				variants={variants}
				transition={{ delay: .25, duration: 1 }}
			>
				<Tags tags={data.tags.map(category => category.title)} />
				
				<Heading asChild size='md'>
					<h3
						className='mt-1'
					>
						{ data.name }
					</h3>
				</Heading>
			</motion.header>
			
			<Text asChild>
				<motion.p
					initial='hidden'
					animate={controls}
					variants={variants}
					transition={{ delay: .5, duration: 1 }}
					className='mt-4'
				>
					{ data.description }
				</motion.p>
			</Text>
		</>
	)
}