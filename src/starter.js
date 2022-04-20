const BASIC = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  15: 'fifteen'
}

const TENS = {
  10: 'ten',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}

export const convert = (numberValue) => {
  if (BASIC[numberValue]) return BASIC[numberValue]
  if (numberValue % 100 === 0) {
    const firstDigit = parseInt(numberValue.toString().charAt(0))
    const firstPart = BASIC[firstDigit]

    return `${firstPart} hundred`
  } else if (numberValue % 10 === 0) {
    const result = TENS[numberValue]
    return result
  } else {
    if (numberValue % 10 !== 0) {
      const firstDigit = parseInt(numberValue.toString().charAt(0))
      const firstPart = TENS[firstDigit * 10]
      const secondPart = numberValue % 10

      if (firstPart === 'ten') {
        return `${BASIC[secondPart]}teen`
      }
      return `${firstPart}-${BASIC[secondPart]}`
    }
  }
}
