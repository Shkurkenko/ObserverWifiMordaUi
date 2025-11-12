export type DynamicCallback = (...args: any[]) => void

export function getRandomIntegerInclusive(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
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
      console.log('Data itoe: ', data[i])
      if (data[i] !== undefined && data[i] !== null) cb(data[i])
    }, intervalMs * i)
  }
}
