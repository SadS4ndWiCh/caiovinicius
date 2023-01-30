import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface TextProps {
	size?: 'sm' | 'md' | 'lg';
	asChild?: boolean;

	children: ReactNode;
	className?: string;
}

export const Text = ({ size='lg', asChild, children, className }: TextProps) => {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp
			className={clsx(
				'text-zinc-300 leading-relaxed whitespace-pre-line',
				{
					'text-xs': size === 'sm',
					'text-sm': size === 'md',
					'text-md': size === 'lg',
				},
				className
			)}
		>
			{ children }
		</Comp>
	)
}