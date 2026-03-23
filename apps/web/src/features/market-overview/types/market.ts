export type MarketMover = {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: number | null
}

export type MarketMoversResponse = {
    topGainers: MarketMover[]
    topLosers: MarketMover[]
    mostActive: MarketMover[]
    lastUpdated?: string
}