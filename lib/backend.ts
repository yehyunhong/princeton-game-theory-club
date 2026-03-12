type BackendRequestInit = RequestInit & {
  next?: {
    revalidate?: number
  }
}

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000'

export function getBackendUrl() {
  return BACKEND_URL.replace(/\/$/, '')
}

export async function fetchFromBackend(path: string, init?: BackendRequestInit) {
  const response = await fetch(`${getBackendUrl()}${path}`, init)

  if (!response.ok) {
    const message = await safeJsonMessage(response)
    throw new Error(message || `Backend request failed with ${response.status}`)
  }

  return response
}

async function safeJsonMessage(response: Response) {
  try {
    const data = await response.json()
    if (typeof data?.message === 'string') {
      return data.message
    }
  } catch {
    // ignore JSON parsing failures so we can fall back to the status text
  }
  return response.statusText
}
