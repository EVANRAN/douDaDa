import * as constans from './constants';
import axios from 'axios';

/**
|--------------------------------------------------
| 格式化时间 2019-02-03
|--------------------------------------------------
*/
function formatDate(date) {
  var myyear = date.getFullYear();
  var mymonth = date.getMonth() + 1;
  var myweekday = date.getDate();

  if (mymonth < 10) {
      mymonth = "0" + mymonth;
  }
  if (myweekday < 10) {
      myweekday = "0" + myweekday;
  }
  return (myyear + "-" + mymonth + "-" + myweekday);
}

function getTimeStamp(string){
  
  string = string.replace(/-/g, '/');
  console.log(string);
  var d = new Date(string);
  var time = d.getTime()/1000;
  return time;
}

export const getUpTimeStr = () => {

  const ymd =  formatDate(new Date());
  const stamp = getTimeStamp(ymd);
  const time = '榜单更新于'+ ymd + ' 12:00:00';

  return {
    type: constans.GET_UPDATE_TIME,
    updateTimeStr: time,
    updateTime: stamp
  } 
}

const updateSellers = (data, page, total) => ({
  type: constans.FETCH_SELLER_DATA,
  page: page,
  total: total,
  list: data
})

function bigNumToString(num){
  
  return (num > 10000)?  ( num/10000).toFixed(1) + '万' : String(num); 
}

export const fetchSellerList = (page) => {

  return (dispatch) => {
    axios.get('/api/seller.json').then((res) => {
      const data = res.data;
      if(data['code'] === 1001){
        let result = data['result'];
        const resList = result['talentSalesRankResList'];
        resList.map((item) => {
          
          const subData = item.talentMessageDTO;
          item.likeCount = bigNumToString(subData.likeNumber);
          item.fansCount = bigNumToString(subData.totalFansNumber);
          return item;
        })
        dispatch(updateSellers(resList, page, result['count']));
      }
    });
  }
}

