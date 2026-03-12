import { NextResponse } from 'next/server'
import { fetchFromBackend } from '@/lib/backend'
import { fallbackEvents } from '@/data/events'

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
    console.error('Falling back to static events:', error)
    return NextResponse.json(fallbackEvents, {
      headers: { 'x-backend-status': 'fallback' },
    })
  }
}
