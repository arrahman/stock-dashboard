import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingDown, TrendingUp, Activity, DollarSign } from 'lucide-react'

const stats = [
  {
    title: 'Top Gainer',
    value: 'NVDA',
    meta: '+5.24%',
    icon: TrendingUp,
  },
  {
    title: 'Top Loser',
    value: 'TSLA',
    meta: '-3.11%',
    icon: TrendingDown,
  },
  {
    title: 'Most Active',
    value: 'AAPL',
    meta: '82.3M volume',
    icon: Activity,
  },
  {
    title: 'Market Value',
    value: '$2.14T',
    meta: 'Sample overview',
    icon: DollarSign,
  },
]

export function MarketStatsSection() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon

        return (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Icon className="text-muted-foreground size-4" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-muted-foreground text-xs">{item.meta}</p>
            </CardContent>
          </Card>
        )
      })}
    </section>
  )
}