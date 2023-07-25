import { NextApiRequest, NextApiResponse } from 'next'

import { revalidatePath } from 'next/cache'

import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook'

const secret = process.env.SANITY_WEBHOOK_SECRET as string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const signature = req.headers[SIGNATURE_HEADER_NAME]
  const body = await readBody(req)

  if (!signature || !isValidSignature(body, signature as string, secret)) {
    res.status(401).json({ success: false, message: 'Invalid signature' })
    return
  }

  revalidatePath('/')
  res.json({ success: true })
}

export const config = {
  api: {
    bodyParser: false,
  },
}

async function readBody(readable: any) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}
