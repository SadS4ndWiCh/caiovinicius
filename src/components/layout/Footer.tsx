import { Text } from "@components/Text";
import { Logo } from "../Icons/Logo";

export const Footer = () => {
  return (
    <footer className='flex items-center justify-between mt-20 py-11'>
      <Logo />

      <Text size='sm'>&copy; 2022 - 2022 Caio Vinícius</Text>
    </footer>
  )
};