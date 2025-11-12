export type DynamicCallback = (...args: any[]) => void

export function getRandomIntegerInclusive(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomEnumValue<T extends Record<any, any>>(enumeration: T): T[keyof T] {
  const keys = Object.values(enumeration) as Array<T[keyof T]>
  const idx = getRandomIntegerInclusive(0, keys.length - 1)
  return keys[idx]
}

export function getTimeNow(): number {
  return Date.now()
}

export function runWithInterval<T>(
  data: T[],
  intervalMs: number,
  times: number,
  cb: DynamicCallback,
) {
  for (let i = 0; i < times; i++) {
    setTimeout(() => {
      if (data[i] !== undefined && data[i] !== null) cb(data[i])
    }, intervalMs * i)
  }
}
