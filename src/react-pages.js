import routes from './routes.js'

// Redux reducers that will be combined into
// a single Redux reducer via `combineReducers()`.
import * as reducers from './redux/index.js'

export default {
  routes,
  reducers
}