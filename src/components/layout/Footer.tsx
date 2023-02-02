import { Text } from "@components/ui/Text";
import { Icons } from "../Icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='flex items-center justify-between mt-20 mx-10 py-11 border-t border-zinc-800'>
      <Icons.logo />

      <Text size='md'>All rights reserved &copy; Caio Vinícius  { currentYear } </Text>
    </footer>
  )
};