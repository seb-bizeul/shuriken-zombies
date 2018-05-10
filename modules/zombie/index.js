// @flow
import reducer from './reducer'
import * as actions from './actions'
import * as selectors from './selectors'
import * as sagas from './sagas'
import Zombie from './components/Zombie'

export default {
  reducer,
  actions,
  selectors,
  sagas,
  components: {
    Zombie
  }
}
