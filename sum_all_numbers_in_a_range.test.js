const { test, expect } = require('@jest/globals')
const sumAll = require('./sum_all_numbers_in_a_range')


// smoke test

const smokeTest = () => {
  expect(sumAll([1, 4])).toBe(10)
  expect(sumAll([4, 1])).toBe(10)
  expect(sumAll([5, 10])).toBe(45)
  expect(sumAll([10, 5])).toBe(45)
}
test('smoke tests', smokeTest)

// edge case test

// automatically generated test for random cases

// theoretical test

// mutation test

// performance test