import { NextApiRequest } from 'next'

import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

import { isValidRequest } from '@sanity/webhook'

const webhookSecrect = process.env.SANITY_WEBHOOK_SECRET as string

export async function POST(req: NextApiRequest) {
  if (!isValidRequest(req, webhookSecrect))
    return NextResponse.json(null, { status: 401 })

  try {
    revalidatePath('/')
    return NextResponse.json(null, { status: 200 })
  } catch (err) {
    return NextResponse.json(null, { status: 500 })
  }
}
