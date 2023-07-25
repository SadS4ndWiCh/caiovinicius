import { NextApiRequest, NextApiResponse } from 'next'

import { parseBody } from 'next-sanity/webhook'

export { config } from 'next-sanity/webhook'

const secret = process.env.SANITY_WEBHOOK_SECRET as string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { isValidSignature } = await parseBody(req, secret)

  if (!isValidSignature) {
    res.status(401).json({ success: false, message: 'Invalid signature' })
    return
  }

  await res.revalidate('/')
  res.json({ success: true })
}
