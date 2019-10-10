import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import './leftnav.less';

const { SubMenu } = Menu;

export class LeftNav extends Component {

  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <div className='left_nav'>
        <Menu
        onClick={this.handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub0','sub1', 'sub2', 'sub4']}
        mode="inline"
      >
        <Menu.Item key="0" >
          <Icon type="compass" />
          工作台</Menu.Item>
        <SubMenu
          key="sub0"
          title={
            <span>
              <Icon type="bulb" />
              <span>创意洞察</span>
            </span>
          }
        >
            <Menu.Item key="100">抖音热门视频</Menu.Item>
            <Menu.Item key="101">抖音热门音乐</Menu.Item>
            <Menu.Item key="102">热点视频追踪</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="shopping-cart" />
              <span>电商数据</span>
            </span>
          }
        >
            <Menu.Item key="1">抖音好物榜 </Menu.Item>
            <Menu.Item key="2">抖音达人销售榜 </Menu.Item>
            <Menu.Item key="3">带货达人福利区 </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="line-chart" />
              <span>抖音榜单</span>
            </span>
          }
        >
            <Menu.Item key="4">抖音红人榜 </Menu.Item>
            <Menu.Item key="5">抖音粉丝榜 </Menu.Item>
            <Menu.Item key="6">抖音新锐榜 </Menu.Item>
            <Menu.Item key="7">抖音掉分榜 </Menu.Item>
        </SubMenu>
        
     
      </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);


