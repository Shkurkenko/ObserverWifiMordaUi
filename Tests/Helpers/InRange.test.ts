// import { describe, expect, test } from '@jest/globals'
// import { inRange } from '../../Src/Utils/Helpers'

// describe('InRange Helper', () => {
//   test('zeros test 0, [0, 0]', () => {
//     expect(inRange(0, 0, 0)).toBeTruthy()
//   })

//   test('all same test 1, [1, 1]', () => {
//     expect(inRange(1, 1, 1)).toBeTruthy()
//   })

//   test('edge test 1, [1, 2]', () => {
//     expect(inRange(1, 1, 2)).toBeTruthy()
//   })

//   test('num 9 in range [8, 11] is in range', () => {
//     expect(inRange(9, 8, 11)).toBeTruthy()
//   })

//   test('num 9 in range [100, 12] is not in range', () => {
//     expect(inRange(9, 100, 12)).toBeFalsy()
//   })

//   test('num -10 in range [11, 12] is not in range for negative num argument', () => {
//     expect(inRange(10, 11, 12)).toBeFalsy()
//   })

//   test('num -10 in range [100, -100] is in range for negative num and one negative argument', () => {
//     expect(inRange(-10, 100, -100)).toBeTruthy()
//   })

//   test('num -1 in range [-100, -12] is not in range for full negative', () => {
//     expect(inRange(-1, -100, -12)).toBeFalsy()
//   })

//   test('num -15 in range [-100, -12] is in range for full negative', () => {
//     expect(inRange(-15, -100, -12)).toBeTruthy()
//   })
// })
