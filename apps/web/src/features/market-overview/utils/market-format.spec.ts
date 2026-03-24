import { describe, expect, it } from 'vitest'
import { formatCurrency, formatPercent, toNumber } from './market-format'

describe('market-format', () => {
  it('parses percentage strings', () => {
    expect(toNumber('12.34%')).toBe(12.34)
  })

  it('parses comma-separated numbers', () => {
    expect(toNumber('1,234.56')).toBe(1234.56)
  })

  it('returns 0 for invalid input', () => {
    expect(toNumber('abc')).toBe(0)
  })

  it('formats currency', () => {
    expect(formatCurrency(123.4)).toBe('$123.40')
  })

  it('formats positive percent with plus sign', () => {
    expect(formatPercent(2.5)).toBe('+2.50%')
  })

  it('formats negative percent without extra plus', () => {
    expect(formatPercent(-1.25)).toBe('-1.25%')
  })
})