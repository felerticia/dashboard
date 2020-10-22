import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import reducers from './reducers'

const browserHistory = createHistory()
const middleware = [thunk, routerMiddleware(browserHistory)]
const enhancers = []

if (process.env.NODE_ENV === 'development') {
    if (typeof window.devToolsExtension === 'function') {
        enhancers.push(window.devToolsExtension())
    }
}

export const history = browserHistory
export const store = createStore(
    reducers,
    compose(applyMiddleware(...middleware), ...enhancers),
)