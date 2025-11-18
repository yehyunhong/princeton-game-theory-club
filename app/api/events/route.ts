import { NextResponse } from 'next/server'
import { fetchFromBackend } from '@/lib/backend'

export const revalidate = 300

export async function GET() {
  try {
    const response = await fetchFromBackend('/api/events', {
      headers: { Accept: 'application/json' },
      next: { revalidate },
    })

    const events = await response.json()
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Failed to load events' },
      { status: 502 }
    )
  }
}
