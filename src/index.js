import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router'
import './index.css'
import App from './pages/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import Auth from './containers/Auth'
import Login from './containers/Login'

const history = createBrowserHistory()

const initialState = {
  balance: 100,
  urlId: 0,
  urlList: [],
  sortList: [],
  submittingUrl:'',
  initialized: false
}

const store = createStore(
  connectRouter(history)(reducers),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions.
      logger, // for redux action logging.
      thunk // for asynchronous actions.
    )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Auth>
          <Route path="/">
            <App />
          </Route>
        </Auth>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
