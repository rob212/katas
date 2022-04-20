import { convert } from './starter'

test('convert 0 returns zero', () => {
  expect(convert(0)).toBe('zero')
})

const singles = [
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine']
]
test.each(singles)('validate(%s) should be %s', (input, expected) => {
  expect(convert(input)).toBe(expected)
})

const tens = [
  [10, 'ten'],
  [12, 'twelve'],
  [11, 'eleven'],
  [14, 'fourteen'],
  [20, 'twenty'],
  [34, 'thirty-four'],
  [21, 'twenty-one'],
  [56, 'fifty-six']
]
test.each(tens)('validate(%s) should be %s', (input, expected) => {
  expect(convert(input)).toBe(expected)
})

const hundreds = [
  [100, 'one hundred'],
  [300, 'three hundred']
]
test.each(hundreds)('validate(%s) should be %s', (input, expected) => {
  expect(convert(input)).toBe(expected)
})
