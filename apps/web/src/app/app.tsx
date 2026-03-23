import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MoversTableCard } from '@/features/market-overview/components/movers-table-card'
import { useMarketMovers } from '@/features/market-overview/hooks/use-market-movers'

export function App() {
  const { data, isLoading, isError, refetch, isFetching } = useMarketMovers()

  if (isLoading) {
    return (
      <main className="p-6">
        <h1 className="mb-6 text-3xl font-bold">Market Dashboard</h1>
        <Card>
          <CardContent className="p-6">Loading market data...</CardContent>
        </Card>
      </main>
    )
  }

  if (isError || !data) {
    return (
      <main className="p-6">
        <h1 className="mb-6 text-3xl font-bold">Market Dashboard</h1>
        <Card>
          <CardContent className="flex items-center justify-between gap-4 p-6">
            <span>Failed to load market data.</span>
            <Button onClick={() => refetch()}>Retry</Button>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="space-y-6 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Market Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            {data.lastUpdated ?? 'Latest available market movers'}
          </p>
        </div>

        <Button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <MoversTableCard title="Top 10 Gainers" items={data.topGainers} />
        <MoversTableCard title="Top 10 Losers" items={data.topLosers} />
      </div>
    </main>
  )
}

export default App