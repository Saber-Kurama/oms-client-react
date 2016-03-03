import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Action from '../../store/actions'
// import { QueueAnim, Table } from 'antd'
import { Link } from 'react-router';
import css from 'react-css-modules';
import { Table, Icon, Button, Form, Input, Row, Col } from 'antd';
import styles from './style';

const FormItem = Form.Item;

// import Nodebar from '../../components/Nodebar/Nodebar'
// import TopicList from '../../components/TopicList/TopicList'
//
// import './Home.less'

// @connect(
//   state => ({...state}),
//   dispatch => bindActionCreators(Action, dispatch)
// )
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operation',
  render(text, record) {
    return (
      <span>
        <a href="#">操作一{record.name}</a>
        <span className="ant-divider"></span>
        <a href="#">操作二</a>
        <span className="ant-divider"></span>
        <a href="#" className="ant-dropdown-link">
          更多 <Icon type="down" />
        </a>
      </span>
    );
  }
}];
const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}];


@css(styles)
export default class Home extends React.Component {
  constructor () {
    super()
  }

  componentWillMount () {
  }

  render () {
    return (
      <div styleName='contain'>
        <div styleName='wrapper'>这是一个面包屑</div>
        <section styleName='content'>
          <div styleName='bar'>
            <Button type="primary">新增用户</Button>
          </div>
          <div styleName='bar'>
            <Form horizontal styleName="advanced-search-form">
  <Row>
    <Col span="8">
      <FormItem
        label="搜索名称："
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}>
        <Input placeholder="请输入搜索名称" />
      </FormItem>
      <FormItem
        label="较长搜索名称："
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}>
        <Input placeholder="请输入搜索名称" />
      </FormItem>
      <FormItem
        label="搜索名称："
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}>
        <Input placeholder="请输入搜索名称" />
      </FormItem>
    </Col>
    <Col span="8">
      <FormItem
        label="搜索名称："
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}>
        <Input placeholder="请输入搜索名称" />
      </FormItem>
      <FormItem
        label="较长搜索名称："
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}>
        <Input placeholder="请输入搜索名称" />
      </FormItem>
      <FormItem
        label="搜索名称："
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}>
        <Input placeholder="请输入搜索名称" />
      </FormItem>
    </Col>
    <Col span="8">
      <FormItem
        label="搜索名称："
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}>
        <Input placeholder="请输入搜索名称" />
      </FormItem>
      <FormItem
        label="较长搜索名称："
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}>
        <Input placeholder="请输入搜索名称" />
      </FormItem>
      <FormItem
        label="搜索名称："
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}>
        <Input placeholder="请输入搜索名称" />
      </FormItem>
    </Col>
  </Row>
  <Row>
    <Col span="8" offset="16" style={{ textAlign: 'right' }}>
      <Button type="primary" htmlType="submit">搜索</Button>
      <Button type="ghost">清除条件</Button>
    </Col>
  </Row>
</Form>
          </div>
          <Table columns={columns} dataSource={data} />
          这是内容
          只是一个about的界面
          gotoAbout
          <Link to="/about">点此退出</Link>
        </section>

      </div>
    )
  }
}
