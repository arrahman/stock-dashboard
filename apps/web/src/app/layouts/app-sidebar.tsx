import { BarChart3, Briefcase, Newspaper, Settings, Star } from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', icon: BarChart3 },
  { label: 'Markets', icon: Briefcase },
  { label: 'Watchlist', icon: Star },
  { label: 'News', icon: Newspaper },
  { label: 'Settings', icon: Settings },
]

export function AppSidebar() {
  return (
    <aside className="hidden border-r bg-muted/30 lg:block">
      <div className="flex h-full flex-col p-4">
        <div className="mb-8 px-2">
          <h2 className="text-lg font-semibold">Market Pulse</h2>
          <p className="text-muted-foreground text-sm">
            Stock analytics dashboard
          </p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.label}
                className="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors"
              >
                <Icon className="size-4" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}