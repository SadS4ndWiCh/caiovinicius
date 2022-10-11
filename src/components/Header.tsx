import { Logo } from "./Icons/Logo";

const navLinks = [
  { label: 'Introduction', destination: '#introduction' },
  { label: 'Projects', destination: '#projects' },
  { label: 'About', destination: '#about' },
]

export const Header = () => {
  return (
    <header className='sticky top-2 left-0 right-0 z-10 flex items-center justify-center px-6 py-6 backdrop-saturate-[180%] backdrop-blur-[20px] rounded-lg md:justify-between'>
      <Logo />

      <ul className='flex items-center gap-2'>
        { navLinks.map(link => (
          <li key={link.label}>
            <a href={link.destination} className='flex p-2 hover:text-white'>
              { link.label }
            </a>
          </li>
        )) }
      </ul> 
    </header>
  )
};