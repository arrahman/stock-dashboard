import { z } from 'zod'

const envSchema = z.object({
  VITE_MARKET_API_BASE_URL: z.string().url(),
  VITE_MARKET_API_KEY: z.string().min(1),
})

const parsed = envSchema.safeParse(import.meta.env)

if (!parsed.success) {
  console.error(parsed.error.format())
  throw new Error('Invalid environment variables')
}

export const env = {
  marketApiBaseUrl: parsed.data.VITE_MARKET_API_BASE_URL,
  marketApiKey: parsed.data.VITE_MARKET_API_KEY,
}