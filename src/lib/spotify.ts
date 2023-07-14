const clientId = process.env.SPOTIFY_CLIENT_ID as string
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN as string

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

async function getAccessToken() {
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  }).toString()

  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  return res.json()
}

export async function getNowPlaying() {
  // eslint-disable-next-line camelcase
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`,
    },
  })
}
