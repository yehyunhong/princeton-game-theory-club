import { NextResponse } from 'next/server'
import { fetchFromBackend } from '@/lib/backend'

export const revalidate = 300

export async function GET() {
  try {
    const response = await fetchFromBackend('/api/team', {
      headers: { Accept: 'application/json' },
      next: { revalidate },
    })

    const team = await response.json()
    return NextResponse.json(team)
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Failed to load team' },
      { status: 502 }
    )
  }
}
