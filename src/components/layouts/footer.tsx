import { Socials } from "../socials";

export function Footer() {
  return (
    <footer className="flex items-center justify-between max-w-3xl w-full mx-auto p-4">
      <span className="text-sm text-muted-foreground">&copy; Caio Vinícius</span>

      <Socials />
    </footer>
  )
}
