import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer} from './reducers/todoReducer';
import { appReducer} from './reducers/appReducer';

declare global {
  interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
  todoModule: todoReducer,
  appModule: appReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

