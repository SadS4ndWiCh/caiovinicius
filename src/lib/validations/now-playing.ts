import { z } from 'zod'

export const artistResponseSchema = z.object({
  name: z.string(),
})

export const albumResponseSchema = z.object({
  name: z.string(),
  images: z.array(
    z.object({
      url: z.string().url(),
    }),
  ),
})

export const songResponseSchema = z.object({
  name: z.string(),
  artists: z.array(artistResponseSchema),
  album: albumResponseSchema,
  external_urls: z.object({
    spotify: z.string(),
  }),
})

export const nowPlayingResponseSchema = z.object({
  is_playing: z.boolean(),
  item: songResponseSchema,
})

export const nowPlayingSchema = z.object({
  isPlaying: z.boolean(),
  title: z.string(),
  artist: z.string(),
  album: z.string(),
  albumImageUrl: z.string().url(),
  songUrl: z.string().url(),
})
