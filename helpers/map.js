// @flow
import Maybe from 'data.maybe'

export type Map<T> = $ReadOnly<{ [string]: T }>

export function get<T>(key: string, map: Map<T>): Maybe<T> {
  return Maybe.fromNullable(map[key])
}

export function toArray<T>(map: Map<T>): T[] {
  return Object.keys(map).map(key => map[key])
}
