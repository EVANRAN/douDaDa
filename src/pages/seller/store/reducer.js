import { constants, actions } from "./index";

const defaultState = {
  updateTime : 0,
  updateTimeStr : '',
  page :1,
  list :[], 
  total: 0,
}
export default (state=defaultState, action) => {

  switch(action.type) {
    case constants.GET_UPDATE_TIME:
      return {...state, ...action};
    case constants.FETCH_SELLER_DATA:
      return {...state, ...action};
    default:
      return state;
  }
}