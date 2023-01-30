type Props = {
	tags: string[];
};

export const Tags = ({ tags }: Props) => {
	return (
		<div className='flex items-center gap-2'>
			{ tags.map(tag => (
				<div key={tag} className='w-fit bg-identity rounded-full px-[0.125rem] py-[0.125rem]'>
					<span
						className='block text-[10px] px-3 py-[0.125rem] rounded-full bg-primary-900 text-white uppercase tracking-widest shadow-identity'
					>
						{ tag }
					</span>
				</div>
			)) }
		</div>
	)
}