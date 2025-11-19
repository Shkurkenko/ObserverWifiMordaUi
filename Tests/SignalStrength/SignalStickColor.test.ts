import { expect, describe, test } from '@jest/globals'
import {
  getStickBackgroundColor,
  getSignalStrengthStatus,
} from '../../Src/Components/SignalStrength'
import { ReoSpace } from '../../Src/Shared/Interfaces/Reo.interface'

/* Matches RSSI tresholds, but here could be another ranges */
const SignalStrengthMap: Record<ReoSpace.ISignalLevels, ReoSpace.ISignalRange> = {
  [ReoSpace.ISignalLevels.Excellent]: {
    beginValue: Number.POSITIVE_INFINITY,
    endValue: -70,
  },
  [ReoSpace.ISignalLevels.Good]: {
    beginValue: -70,
    endValue: -85,
  },
  [ReoSpace.ISignalLevels.Fair]: {
    beginValue: -86,
    endValue: -100,
  },
  [ReoSpace.ISignalLevels.Poor]: {
    beginValue: -100,
    endValue: -110,
  },
  [ReoSpace.ISignalLevels.No]: {
    beginValue: -110,
    endValue: Number.NEGATIVE_INFINITY,
  },
}

const rssiExcellentValueBegin = SignalStrengthMap[ReoSpace.ISignalLevels.Excellent].beginValue
const rssiExcellentValueEnd = SignalStrengthMap[ReoSpace.ISignalLevels.Excellent].endValue

const rssiGoodValueBegin = SignalStrengthMap[ReoSpace.ISignalLevels.Good].beginValue
const rssiGoodValueEnd = SignalStrengthMap[ReoSpace.ISignalLevels.Good].endValue

const rssiFairValueBegin = SignalStrengthMap[ReoSpace.ISignalLevels.Fair].beginValue
const rssiFairValueEnd = SignalStrengthMap[ReoSpace.ISignalLevels.Fair].endValue

const rssiPoorValueBegin = SignalStrengthMap[ReoSpace.ISignalLevels.Poor].beginValue
const rssiPoorValueEnd = SignalStrengthMap[ReoSpace.ISignalLevels.Poor].beginValue

const rssiNoValueBegin = SignalStrengthMap[ReoSpace.ISignalLevels.No].endValue
const rssiNoValueEnd = SignalStrengthMap[ReoSpace.ISignalLevels.No].endValue

describe('Get signal strength status', () => {
  test(`dbm arg ${rssiExcellentValueBegin} need to be in Excellent`, () => {
    expect(getSignalStrengthStatus(rssiExcellentValueBegin)).toMatch(
      ReoSpace.ISignalLevels.Excellent,
    )
  })

  test(`dbm arg ${rssiExcellentValueEnd} need to be in Excellent`, () => {
    expect(getSignalStrengthStatus(rssiExcellentValueEnd)).toMatch(ReoSpace.ISignalLevels.Excellent)
  })

  test(`dbm arg ${rssiGoodValueBegin} need to be in Good`, () => {
    expect(getSignalStrengthStatus(rssiFairValueBegin)).toMatch(ReoSpace.ISignalLevels.Good)
  })

  test(`dbm arg ${rssiFairValueBegin} need to be in Fair`, () => {
    expect(getSignalStrengthStatus(rssiFairValueBegin)).toMatch(ReoSpace.ISignalLevels.Fair)
  })

  test(`dbm arg ${rssiPoorValueBegin} need to be in Poor`, () => {
    expect(getStickBackgroundColor(rssiPoorValueBegin, ReoSpace.ISignalLevels.Poor))
  })

  test(`dbm arg ${rssiNoValueBegin} need to be in No signal value`, () => {
    expect(getSignalStrengthStatus(rssiNoValueBegin)).toMatch(ReoSpace.ISignalLevels.No)
  })
})

describe('Get signal stick color', () => {
  test(`dbm arg ${rssiExcellentValueBegin} need to be in Excellent
         range with color green positive`, () => {
    expect(
      getStickBackgroundColor(rssiExcellentValueBegin, ReoSpace.ISignalLevels.Excellent),
    ).toMatch('green')
  })

  test(`dbm arg ${rssiExcellentValueEnd} need to be in Excellent
         range with color green negative`, () => {
    expect(
      getStickBackgroundColor(rssiExcellentValueEnd, ReoSpace.ISignalLevels.Excellent),
    ).toMatch('green')
  })

  test(`dbm arg ${rssiGoodValueBegin} need to be in Good
    range with color lightgreen`, () => {
    expect(getStickBackgroundColor(rssiGoodValueBegin, ReoSpace.ISignalLevels.Good)).toMatch(
      'lightgreen',
    )
  })

  test(`dbm arg ${rssiFairValueBegin} need to be in Fair
    range with color yellow`, () => {
    expect(getStickBackgroundColor(rssiFairValueBegin, ReoSpace.ISignalLevels.Fair)).toMatch(
      'yellow',
    )
  })

  const poorValue = SignalStrengthMap[ReoSpace.ISignalLevels.Poor].beginValue
  test(`dbm arg ${rssiPoorValueBegin} need to be in Poor
    range with color orange`, () => {
    expect(getStickBackgroundColor(rssiPoorValueBegin, ReoSpace.ISignalLevels.Poor)).toMatch(
      'orange',
    )
  })

  const noValue = SignalStrengthMap[ReoSpace.ISignalLevels.No].beginValue
  test(`dbm arg ${rssiNoValueBegin} need to be in Poor
    range with color orange`, () => {
    expect(getStickBackgroundColor(rssiNoValueBegin, ReoSpace.ISignalLevels.Poor)).toMatch('red')
  })
})
