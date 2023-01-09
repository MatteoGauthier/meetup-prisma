import { shake } from "radash"

export function cleanObject<T>(input: object): T {
  return shake(input, (e) => !Boolean(e)) as T
}
