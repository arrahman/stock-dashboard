
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { getMarketMovers } from '../api/market.api'
import type { MarketMoversResponse } from '../types/market'

export type UseMarketMoversResult = UseQueryResult<MarketMoversResponse, Error>

export function useMarketMovers(): UseMarketMoversResult {
  return useQuery({
    queryKey: ['market-movers'],
    queryFn: getMarketMovers,
  })
}