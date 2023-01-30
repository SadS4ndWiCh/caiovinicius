import { Text } from "@components/ui/Text";
import { Icons } from "../Icons";

export const Footer = () => {
  return (
    <footer className='container mx-auto flex items-center justify-between mt-20 py-11'>
      <Icons.logo />

      <Text size='sm'>&copy; 2022 - 2022 Caio Vinícius</Text>
    </footer>
  )
};