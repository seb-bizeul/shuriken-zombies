// @flow
import { fork } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'

import shuriken from '../shuriken'
import zombie from '../zombie'
import loop from '../loop'

export default function* root(): Saga<*> {
  yield fork(loop.sagas.root)
  yield fork(shuriken.sagas.root)
  yield fork(zombie.sagas.root)
}