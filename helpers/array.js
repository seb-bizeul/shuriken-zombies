// @flow
import Maybe from 'data.maybe'

import type { Map } from './map'

export function toMapById<T: {id: string}>(array: T[]): Map<T> {
  return array.reduce((acc, it) => Object.assign({}, acc, { [it.id]: it }), {})
}

export function find<T>(predicate: T => boolean, array: T[]): Maybe<T> {
  return Maybe.fromNullable(array.find(predicate))
}

export function findIndex<T>(predicate: T => boolean, array: T[]): Maybe<number> {
  return Maybe.fromNullable(array.findIndex(predicate))
}
