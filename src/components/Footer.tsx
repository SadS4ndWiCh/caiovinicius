import { Logo } from "./Icons/Logo";

export const Footer = () => {
  return (
    <footer className='flex items-center justify-between mt-20 py-11'>
      <Logo />

      <span className='text-xs'>&copy; 2022 - 2022 Caio Vinícius</span>
    </footer>
  )
};