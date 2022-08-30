import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootreducer } from './reducer/rootreducer'
import rootSaga from './saga/rootsaga'

const sagaMiddleware = createSagaMiddleware()

const Middlewares = [sagaMiddleware, thunk];
export const store = createStore(
    rootreducer,
    applyMiddleware(...Middlewares)
)
sagaMiddleware.run(rootSaga)

