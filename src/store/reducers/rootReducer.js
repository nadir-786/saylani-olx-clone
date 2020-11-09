import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import ProductReducer from './ProductReducer'
const rootReducer = combineReducers({
    UserReducer,
    ProductReducer
})
export default rootReducer;
