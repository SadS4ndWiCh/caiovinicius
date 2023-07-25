import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook'

const webhookSecrect = process.env.SANITY_WEBHOOK_SECRET as string

export async function POST(req: NextRequest) {
  const signature = req.headers.get(SIGNATURE_HEADER_NAME)
  const body = await req.json()

  if (!signature || !isValidSignature(body, signature, webhookSecrect))
    return NextResponse.json(null, { status: 401 })

  try {
    revalidatePath('/')
    return NextResponse.json(null, { status: 200 })
  } catch (err) {
    return NextResponse.json(null, { status: 500 })
  }
}
