/**
 * 头部组件
 */
import styles from './style.css';
import css from 'react-css-modules';

console.log(styles);
@css(styles)
export default class Header extends Component {
  render() {
    return (
      <header  styleName='header' className = {this.props.class}>
        <div className='glyphicon glyphicon-lock'>易世达</div>
        <a styleName='logo'>这是一个logo</a>
        <ul styleName='toolbar'>
          <li>菜单一</li>
          <li>菜单二</li>
        </ul>

      </header>
    );
  }
}
