export async function GET() {
  const res = await fetch('https://file.notion.so/f/f/7602a5c9-7b65-4de5-afcc-0ec6bd5f2129/74384cad-52ac-487a-82d4-21f050d8f3fb/100-last-donations.json?id=66b7900d-2c42-4ed0-a3f2-00f157143b78&table=block&spaceId=7602a5c9-7b65-4de5-afcc-0ec6bd5f2129&expirationTimestamp=1701000000000&signature=m_w1exYPlD3hkn3CSjsyd08P5B-bq_gQ0TdJWtlvpI4&downloadName=100-last-donations.json', {
  })
  const data = await res.json()
 
  return Response.json({ data })
}