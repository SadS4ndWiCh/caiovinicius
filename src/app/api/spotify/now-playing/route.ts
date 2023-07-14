import { NextResponse } from 'next/server'

import { z } from 'zod'

import { getNowPlaying } from '~/lib/spotify'
import { nowPlayingResponseSchema } from '~/lib/validations/now-playing'

export const revalidate = 10

export async function GET() {
  const res = await getNowPlaying()

  if (res.status === 204 || res.status > 400) {
    return NextResponse.json({ isPlaying: false }, { status: 200 })
  }

  try {
    const song = nowPlayingResponseSchema.parse(await res.json())

    const isPlaying = song.is_playing
    const title = song.item.name
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
    const album = song.item.album.name
    const albumImageUrl = song.item.album.images[0].url
    const songUrl = song.item.external_urls.spotify

    return NextResponse.json(
      {
        isPlaying,
        title,
        artist,
        album,
        albumImageUrl,
        songUrl,
      },
      { status: 200 },
    )
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(err.issues, { status: 500 })
    }

    return NextResponse.json(null, { status: 500 })
  }
}
