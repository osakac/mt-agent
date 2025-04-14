function pluralize(number: number, titles: string[]) {
  number = Math.abs(number)
  const remainder100 = number % 100
  const remainder10 = number % 10

  if (remainder100 >= 11 && remainder100 <= 14) {
    return `${number} ${titles[2]}`
  }
  if (remainder10 === 1) {
    return `${number} ${titles[0]}`
  }
  if (remainder10 >= 2 && remainder10 <= 4) {
    return `${number} ${titles[1]}`
  }
  return `${number} ${titles[2]}`
}

export const pluralizePeople = (number: number) =>
  pluralize(number, ['человек', 'человека', 'людей'])
