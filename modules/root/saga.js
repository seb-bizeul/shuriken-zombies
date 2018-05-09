// @flow
import { fork } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'

import shuriken from '../shuriken'

export default function* root(): Saga<*> {
  yield fork(shuriken.sagas.root)
}