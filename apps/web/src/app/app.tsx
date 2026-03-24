import { AppSidebar } from '@/app/layouts/app-sidebar'
import { DashboardHeader } from '@/app/layouts/dashboard-header'
import { MarketStatsSection } from '@/features/market-overview/components/market-stats-section'
import { MarketTablesSection } from '@/features/market-overview/components/market-tables-section'

export function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <AppSidebar />

        <main className="flex min-w-0 flex-col">
          <DashboardHeader />

          <div className="flex-1 space-y-6 p-6">
            <MarketStatsSection />
            <MarketTablesSection />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App