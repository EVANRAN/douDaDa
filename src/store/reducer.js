import {combineReducers} from 'redux';
import {reducer as leftNavReducer} from '../common/leftNav/store';
import {reducer as sellerReducer} from '../pages/seller/store';

const reducer = combineReducers({
  leftNav: leftNavReducer,
  seller: sellerReducer
});

export default reducer;
