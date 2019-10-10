import React, { Component } from 'react'
import { connect } from 'react-redux'
import './seller.less';
import {actions, constants} from "./store";
import { Table, Pagination, Button } from 'antd';

class Seller extends Component {

  constructor(props){
    super(props);
    this.props.getUpdateTimeStr();
  }



  componentDidMount(){

    const { list, page, getSellerList } = this.props;
    !list.length && getSellerList(page);

  }


  render() {
    const {uptimeStr, list, page , total, getSellerList} = this.props;

    const columns = [{
      title: '排名',
      dataIndex: 'rank',
      key:'rank'
    }, {
      title: '头像',
      dataIndex: 'avatar',
      key:'avatar',
      render: (record) => (
      <span className='avatar'>
        <img src= {record} />
      </span>)
    }, {
      title: '昵称',
      dataIndex: 'douyinName',
      key:'douyinName',
      width: '143px'
    }, {
      title: '标签',
      dataIndex: 'talentMessageDTO.tagsName[0]',
      key:'tagsName'
    }, {
      title: '	粉丝总数',
      dataIndex: 'fansCount',
      key:'fansCount'
    }, {
      title: '点赞总数',
      dataIndex: 'likeCount',
      key:'likeCount'
    }, {
      title: '视频数',
      dataIndex: 'talentMessageDTO.videoNumber',
      key:'videoNumber'
    }, {
      title: '商品数',
      dataIndex: 'talentMessageDTO.productCount',
      key:'productCount'
    }, {
      title: '在卖商品',
      // dataIndex: 'showCount',
      key:'sellingGood'
    } ]
    return (
      <div className='wrapper'>
        <div className='header'>
          <div className='title'>抖音达人销量榜</div>
          <div className='up_time'>{uptimeStr}</div>
        </div>
        <div className='content'>
          <Table 
            dataSource={list}
            columns = {columns}
            pagination = {false}
            rowKey= {record => record.id}
            />
          <Pagination
            className='antd_pagination'
            current={page}
            pageSize= {constants.PAGE_SIZE}
            total = {total}
            onChange = {getSellerList}/>


        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  uptimeStr : state.seller.updateTimeStr,
  list : state.seller.list,
  page : state.seller.page,
  total : state.seller.total
})

const mapDispatchToProps = (dispatch) => {
  return {
    getUpdateTimeStr(){
      dispatch(actions.getUpTimeStr());
    },
    getSellerList(page){
      dispatch(actions.fetchSellerList(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seller);
