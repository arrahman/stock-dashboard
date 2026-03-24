import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { MarketMover } from '../types/market'

type Props = {
  title: string
  items: MarketMover[]
}

export function MoversTableCard({ title, items }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">% Change</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {items.map((item) => {
              const isPositive = item.changePercent >= 0

              return (
                <TableRow key={item.symbol}>
                  <TableCell className="font-medium">{item.symbol}</TableCell>
                  <TableCell className="text-right">
                    ${item.price.toFixed(2)}
                  </TableCell>
                  <TableCell
                    className={`text-right font-medium ${
                      isPositive ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {isPositive ? '+' : ''}
                    {item.changePercent.toFixed(2)}%
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}