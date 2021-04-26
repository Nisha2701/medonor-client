import { createStore,combineReducers,applyMiddleware, compose } from 'redux';
import { DonorSpeaks} from './reducers/donorspeaks';
import thunk from "redux-thunk";
import logger from "redux-logger";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
           donorspeaks: DonorSpeaks
        }),
        composeEnhancers(applyMiddleware(thunk, logger))
    );
    return store;
}