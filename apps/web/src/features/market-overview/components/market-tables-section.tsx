import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MoversTableCard } from './movers-table-card'
import { useMarketMovers } from '../hooks/use-market-movers'

export function MarketTablesSection() {
  const { data, isLoading, isError } = useMarketMovers()

  if (isLoading) {
    return (
      <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Market Trend</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground h-[320px]">
            Loading chart...
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Movers</CardTitle>
          </CardHeader>
          <CardContent>Loading tables...</CardContent>
        </Card>
      </div>
    )
  }

  if (isError || !data) {
    return (
      <Card>
        <CardContent className="p-6">Failed to load market data.</CardContent>
      </Card>
    )
  }

  return (
    <section className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>Market Trend</CardTitle>
        </CardHeader>
        <CardContent className="flex h-[320px] items-center justify-center text-sm text-muted-foreground">
          Chart goes here next
        </CardContent>
      </Card>

      <div className="space-y-6">
        <MoversTableCard title="Top 10 Gainers" items={data.topGainers} />
        <MoversTableCard title="Top 10 Losers" items={data.topLosers} />
      </div>
    </section>
  )
}