import { z } from 'zod'
import { env } from '@/lib/env'
import type { MarketMover, MarketMoversResponse } from '../types/market'

const rawMoverSchema = z.object({
  ticker: z.string(),
  price: z.string(),
  change_amount: z.string(),
  change_percentage: z.string(),
  volume: z.string().optional(),
})

const rawResponseSchema = z.object({
  top_gainers: z.array(rawMoverSchema),
  top_losers: z.array(rawMoverSchema),
  most_actively_traded: z.array(rawMoverSchema),
  metadata: z.string().optional(),
})

function toNumber(value: string): number {
  const cleaned = value.replace(/[,%]/g, '').trim()
  const parsed = Number(cleaned)
  return Number.isNaN(parsed) ? 0 : parsed
}

function mapMover(item: z.infer<typeof rawMoverSchema>): MarketMover {
  return {
    symbol: item.ticker,
    name: item.ticker,
    price: toNumber(item.price),
    change: toNumber(item.change_amount),
    changePercent: toNumber(item.change_percentage),
    volume: item.volume ? toNumber(item.volume) : null,
  }
}

export async function getMarketMovers(): Promise<MarketMoversResponse> {
  const url = new URL('/query', env.marketApiBaseUrl)
  url.searchParams.set('function', 'TOP_GAINERS_LOSERS')
  url.searchParams.set('apikey', env.marketApiKey)

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error(`Failed to fetch market movers: ${response.status}`)
  }

  const json = await response.json()
  const parsed = rawResponseSchema.safeParse(json)

  if (!parsed.success) {
    console.error(json)
    throw new Error('Unexpected API response format')
  }

  return {
    topGainers: parsed.data.top_gainers.slice(0, 10).map(mapMover),
    topLosers: parsed.data.top_losers.slice(0, 10).map(mapMover),
    mostActive: parsed.data.most_actively_traded.slice(0, 10).map(mapMover),
    lastUpdated: parsed.data.metadata,
  }
}