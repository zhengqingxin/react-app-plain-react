import React, { Component } from 'react';
import request from 'utils/request';
import config from 'utils/config';
import {Table,Spin,AutoComplete,Input} from 'antd';
const Search = Input.Search;
const LS_LOCAL_USER_KEY = 'LOCAL_USERS';
const LOCAL_USER = JSON.parse(localStorage.getItem(LS_LOCAL_USER_KEY)) || [];
console.log(JSON.parse(localStorage.getItem(LS_LOCAL_USER_KEY)))
class Project extends Component {
  
  state = {
    criteria:{
      user:LOCAL_USER[LOCAL_USER.length -1]
    },
    list:[],
    localUsers:LOCAL_USER,
    loading:false
  };

  columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
      width:'20%',
      render:(val,item)=>{
        return (
          <a href={item.html_url} target="_blank">{val}</a>
        )
      }
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      width: '40%'
    },
    {
      title: '创建者',
      dataIndex: 'owner',
      key: 'owner',
      render:(val)=>{
        return (
          <a href={val.html_url} target="_blank">{val.login}</a>
        )
      }
    },
    {
      title: '关注人数',
      dataIndex: 'watchers',
      key: 'watchers',
    },
    {
      title: 'Fork人数',
      dataIndex: 'forks',
      key: 'forks',
    }
  ];

  async componentDidMount(){
    await this.load();
  }

  async load(){
    console.log(this.state.criteria.user)
    if(!this.state.criteria.user){
      return;
    }
    this.setState({loading:true});
    const list = await request({
      url:config.api.getFavoriteByUser,
      data:this.state.criteria
    });
    this.setState({list,loading:false});
  }

  handleSearch(val){
    const criteria = Object.assign({},this.state.criteria,{user:val});
    this.setState({criteria},this.load);
    if(this.state.localUsers.indexOf(val) === -1){
      this.state.localUsers.push(val);
    }
    localStorage.setItem(LS_LOCAL_USER_KEY,JSON.stringify(this.state.localUsers));
  }

  render() {
    return (
      <div>
        <AutoComplete
          dataSource={this.state.localUsers}
          style={{ width: 200,marginBottom:20 }}
          onSelect={this.handleSearch.bind(this)}
          defaultActiveFirstOption={false}
          defaultValue={this.state.criteria.user}
        >
          <Search
            placeholder="请输入用户名..."
            onSearch={this.handleSearch.bind(this)}
            enterButton
          />
        </AutoComplete>
        <Spin spinning={this.state.loading}>
          <Table 
            columns={this.columns} 
            dataSource={this.state.list}
            pagination={false}
            rowKey="id"
          />
        </Spin>
      </div>
    );
  }
}

export default Project;
