import { createStore,applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { rootreducer } from './reducer';

 
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['counter']
  }

   
const persistedReducer = persistReducer(persistConfig, rootreducer)

export const configStore=()=>{
    let store = createStore(persistedReducer ,applyMiddleware(thunk))
    let persistor = persistStore(store)

    return {store,persistor}
}
