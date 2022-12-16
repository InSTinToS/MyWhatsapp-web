export const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const authHeader = {
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_STRIPE_TOKEN}`
  }
}
