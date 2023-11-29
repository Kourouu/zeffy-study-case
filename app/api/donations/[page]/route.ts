import { DonationResponse } from '@/types'
import { jsonUrl } from '../constants'
export async function GET(request: Request, { params }: {params: {page: number}}) {
  const res = await fetch(jsonUrl, {
    next: { revalidate: 60 }
  })
  const { page } = params;
  const data: DonationResponse = await res.json()
  const sorted = data.sort((a, b) => a.donation.createdAtUtc < b.donation.createdAtUtc ? 1 : -1)
  const limit = 10;
  const values = [(page - 1) * limit, page * limit - 1]
  const sliced = sorted.slice(values[0],values[1])

  return Response.json({ data: sliced })
}