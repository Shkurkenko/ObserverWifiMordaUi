import { useEffect, useRef, useState } from 'preact/hooks'
import { inRange } from '../../Utils/Helpers'
import { ReoSpace } from '../../Shared/Interfaces/Reo.interface'

import './index.css'
import { RefObject } from 'preact'

export const SignalStrengthMap: Record<ReoSpace.ISignalLevels, ReoSpace.ISignalRange> = {
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

export const SignalSticksHeightsMap: Record<ReoSpace.ISignalLevels, string> = {
  [ReoSpace.ISignalLevels.Excellent]: '100%',
  [ReoSpace.ISignalLevels.Good]: '75%',
  [ReoSpace.ISignalLevels.Fair]: '50%',
  [ReoSpace.ISignalLevels.Poor]: '25%',
  [ReoSpace.ISignalLevels.No]: '0',
}

export const SignalSticksColorMap: Record<ReoSpace.ISignalLevels, string> = {
  [ReoSpace.ISignalLevels.Excellent]: 'green',
  [ReoSpace.ISignalLevels.Good]: 'lightgreen',
  [ReoSpace.ISignalLevels.Fair]: 'yellow',
  [ReoSpace.ISignalLevels.Poor]: 'orange',
  [ReoSpace.ISignalLevels.No]: 'red',
}

export function getSignalStrengthStatus(dbm: number): ReoSpace.ISignalLevels | undefined {
  for (const key in SignalStrengthMap) {
    if (
      inRange(
        dbm,
        SignalStrengthMap[key as ReoSpace.ISignalLevels].beginValue,
        SignalStrengthMap[key as ReoSpace.ISignalLevels].endValue,
      )
    ) {
      return key as ReoSpace.ISignalLevels
    }
  }
  return undefined
}

export function getStickBackgroundColor(maxDbm: number, currentStickType: ReoSpace.ISignalLevels) {
  const currentMaxSignalStatus = getSignalStrengthStatus(maxDbm)
  const stickColored =
    SignalStrengthMap[currentMaxSignalStatus as ReoSpace.ISignalLevels].beginValue >
    SignalStrengthMap[currentStickType as ReoSpace.ISignalLevels].endValue
  const currentColor = SignalSticksColorMap[currentMaxSignalStatus as ReoSpace.ISignalLevels]

  return stickColored ? currentColor : 'grey'
}

export interface SignalStrengthProps {
  dbm: number
}

export function SignalStrength({ dbm }: SignalStrengthProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sticks, setSticks] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.offsetWidth
    const height = container.offsetHeight

    const levelsCount = Object.keys(ReoSpace.ISignalLevels).length
    const partHeight = height / levelsCount
    const partWidth = width / levelsCount

    if (width !== 0 || height !== 0) {
      const newSticks = Object.keys(ReoSpace.ISignalLevels).map((_, i) => (
        <div
          key={i}
          className='signal-stick w-full h-full'
          style={{
            height: `${height - i * partHeight}px`,
            width: `${partWidth}px`,
            //   backgroundColor: getStickBackgroundColor(dbm, Object.values(ReoSpace.ISignalLevels)[i]),
          }}
        />
      ))

      setSticks(newSticks)
    }
  }, [dbm, containerRef.current?.offsetWidth, containerRef.current?.offsetHeight])

  return (
    <div
      ref={containerRef}
      className='signal-strength-container flex items-end gap-1 w-full h-full'
    >
      {sticks}
    </div>
  )
}
