import { Spotify } from '../spotify'

export function Footer() {
  return (
    <footer>
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-between p-4 gap-4 md:flex-row">
        <Spotify />

        <p className="text-slate-400 text-sm flex-shrink-0">
          All rights reserved © Caio Vinícius 2023
        </p>
      </div>
    </footer>
  )
}
