export const formatToMoney = (
  value: number,
  intSeparator = '.',
  decimalSeparator = ','
) => {
  const [integer, decimal] = value.toString().split('.')
  const newInteger: any[] = integer.split('')

  if (newInteger.length > 3)
    for (let i = 0; (-3 * (i + 1) - i) * -1 < newInteger.length; i++)
      newInteger.splice(-3 * (i + 1) - i, 0, 'I')

  return (
    newInteger.toString().replaceAll(',', '').replaceAll('I', intSeparator) +
    decimalSeparator +
    decimal
  )
}
