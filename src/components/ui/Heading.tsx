import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface HeadingProps {
	size?: 'sm' | 'md' | 'lg';
	asChild?: boolean;

	children: ReactNode;
	className?: string;
}

export const Heading = ({ size='lg', asChild, children, className }: HeadingProps) => {
	const Comp = asChild ? Slot : 'h2';

	return (
		<Comp
			className={clsx(
				'text-heading font-bold',
				{
					'text-md md:text-lg': size === 'sm',
					'text-lg md:text-xl': size === 'md',
					'text-xl md:text-2xl': size === 'lg',
				},
				className
			)}
		>
			{ children }
		</Comp>
	)
}