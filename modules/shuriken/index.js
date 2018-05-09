// @flow
import * as actions from './actions'
import * as selectors from './selectors'
import * as sagas from './sagas'
import reducer from './reducer'
import Shuriken from './components/Shuriken'
import Shurikens from './components/Shurikens'
import ShurikenGesture from './components/ShurikenGesture'
import ShurikenContainer from './containers/ShurikenContainer'
import ShurikensContainer from './containers/ShurikensContainer'
import ShurikenGestureContainer from './containers/ShurikenGestureContainer'

export default {
  actions,
  reducer,
  selectors,
  sagas,
  components: {
    Shuriken,
    ShurikenGesture,
    Shurikens
  },
  containers: {
    ShurikensContainer,
    ShurikenGestureContainer,
    ShurikensContainer
  }
}
