export function toNumber(value: string): number {
    const cleaned = value.replace(/[,%]/g, '').trim()
    const parsed = Number(cleaned)
    return Number.isNaN(parsed) ? 0 : parsed
  }
  
  export function formatCurrency(value: number): string {
    return `$${value.toFixed(2)}`
  }
  
  export function formatPercent(value: number): string {
    const sign = value > 0 ? '+' : ''
    return `${sign}${value.toFixed(2)}%`
  }