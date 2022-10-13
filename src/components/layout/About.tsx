type Props = {
	about: string;
}

export const About = ({ about }: Props) => {
	return (
    <section id='about' className="mt-16 md:mt-24">
			<h2 className="text-5xl font-extrabold text-heading">About</h2>
			<p className="mt-3 leading-relaxed whitespace-pre-line">{ about }</p>
		</section>
	)
}