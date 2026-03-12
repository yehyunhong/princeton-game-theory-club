import { NextResponse } from 'next/server'
import { fetchFromBackend } from '@/lib/backend'

export async function POST(request: Request) {
  const payload = await request.json()

  try {
    const response = await fetchFromBackend('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Failed to submit contact form' },
      { status: 502 }
    )
  }
}
