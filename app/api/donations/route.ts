import { jsonUrl } from './constants'
export async function GET() {
  const res = await fetch(jsonUrl, {
    next: { revalidate: 60}
  })
  const data = await res.json()
 
  return Response.json({ data })
}