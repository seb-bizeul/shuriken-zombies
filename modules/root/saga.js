// @flow
import { fork } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'

import shuriken from '../shuriken'
import loop from '../loop'

export default function* root(): Saga<*> {
  yield fork(shuriken.sagas.root)
  yield fork(loop.sagas.root)
}