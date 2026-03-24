import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell, Search } from 'lucide-react'

export function DashboardHeader() {
  return (
    <header className="border-b">
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Market Dashboard</h1>
          <p className="text-muted-foreground text-sm">
            Monitor market movers, trends, and activity
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input className="w-64 pl-9" placeholder="Search symbol..." />
          </div>

          <Button variant="outline" size="sm">
            <Bell className="mr-2 size-4" />
            Alerts
          </Button>
        </div>
      </div>
    </header>
  )
}