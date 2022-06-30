type Props = {
  message: string;
};

export const Announcement = ({ message }: Props) => {
  return (
    <div className='sticky top-0 z-50 w-full py-3 text-sm text-center font-bold border-t-4 border-b-4 border-dashed border-primary-700 border-spacing-5 bg-yellow-400 text-primary-900 md:text-base'>
      { message }
    </div>
  )
};