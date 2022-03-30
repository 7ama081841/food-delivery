import {createStore} from 'redux'
import qtyReducer from './reducers/qtyReducer'

const store = createStore(qtyReducer);

export default store