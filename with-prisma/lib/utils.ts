import { shake } from "radash"

export function cleanObject<T>(input: object): T {
  return shake(input, (e) => e == undefined && e == null && e == "") as T
}

export const colorFromString = function (stringInput: string) {
  const h = stringInput.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  const s = 95,
    l = 35 / 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0") // convert to Hex and prefix "0" if needed
  }
  return `#${f(0)}${f(8)}${f(4)}`
}
