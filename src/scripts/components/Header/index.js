/**
 * 头部组件
 */
import styles from './style.css';
import css from 'react-css-modules';
import { Dropdown, Menu, Icon } from 'antd';

console.log(styles);

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">第一个菜单项</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">第二个菜单项</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">第三个菜单项</Menu.Item>
    </Menu>
);

@css(styles)
export default class Header extends Component {
  render() {
    return (
      <header styleName="header" className = {this.props.class}>
        <div styleName="inner">
          <div className="container">
            <div className="pull-left">
              <a styleName="logo">
                这是一个logo12w12w
              </a>
            </div>
            <div className="pull-right">
              <ul styleName="toolbar">
                <li>
                  <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                      点击触发 <Icon type="down" />
                    </a>
                  </Dropdown>
                </li>
                <li>菜单</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
