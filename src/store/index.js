import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer} from './reducers/todoReducer';
import { appReducer} from './reducers/appReducer';

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
  todoModule: todoReducer,
  appModule: appReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))