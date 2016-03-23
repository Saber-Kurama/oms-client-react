import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Action from '../../store/actions'
// import { QueueAnim, Table } from 'antd'
import { Link } from 'react-router';

// import Nodebar from '../../components/Nodebar/Nodebar'
// import TopicList from '../../components/TopicList/TopicList'
//
// import './Home.less'

// @connect(
//   state => ({...state}),
//   dispatch => bindActionCreators(Action, dispatch)
// )
export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="content">
        只是一个首页
        gotoAbout
        <Link to="/about">点此退出</Link>
        <img src="images/logo.png"></img>
          只是一个首页
          gotoAbout
          <Link to="/about">点此退出</Link>
          <img src="images/logo.png"></img>
            只是一个首页
            gotoAbout
            <Link to="/about">点此退出</Link>
            <img src="images/logo.png"></img>
              只是一个首页
              gotoAbout
              <Link to="/about">点此退出</Link>
              <img src="images/logo.png"></img>
                只是一个首页
                gotoAbout
                <Link to="/about">点此退出</Link>
                <img src="images/logo.png"></img>
                  只是一个首页
                  gotoAbout
                  <Link to="/about">点此退出</Link>
                  <img src="images/logo.png"></img>
                    只是一个首页
                    gotoAbout
                    <Link to="/about">点此退出</Link>
                    <img src="images/logo.png"></img>
                      只是一个首页
                      gotoAbout
                      <Link to="/about">点此退出</Link>
                      <img src="images/logo.png"></img>
                        只是一个首页
                        gotoAbout
                        <Link to="/about">点此退出</Link>
                        <img src="images/logo.png"></img>
                          只是一个首页
                          gotoAbout
                          <Link to="/about">点此退出</Link>
                          <img src="images/logo.png"></img>
                            只是一个首页
                            gotoAbout
                            <Link to="/about">点此退出</Link>
                            <img src="images/logo.png"></img>
                              只是一个首页
                              gotoAbout
                              <Link to="/about">点此退出</Link>
                              <img src="images/logo.png"></img>
                                只是一个首页
                                gotoAbout
                                <Link to="/about">点此退出</Link>
                                <img src="images/logo.png"></img>
      </div>
    );
  }
}
