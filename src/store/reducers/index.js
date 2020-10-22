
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


import loaddata from './loaddata'
import counter from './counter'
import transition from './transition'

const appReducer = (state, action) => {
  return combineReducers(
      {
        router: routerReducer,
        app : loaddata,
        counter,
        transition
        // rest of reducers....
      }
  )(state, action);
}

export default appReducer