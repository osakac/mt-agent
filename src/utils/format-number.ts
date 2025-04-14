export function formatNumber(num: number): string {
  const formatted = num.toLocaleString('ru-RU', {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
  })

  return formatted.replace(/,/g, '.').replace(/\u202F/g, ' ')
}
