/**
 * 头部组件
 */
import styles from './style.css';
import css from 'react-css-modules';

console.log(styles);
@css(styles)
export class Header extends Component {
  render() {
    return (
      <header  styleName='header'>
           asdasdasdasasfdaxczcjzx
           <div styleName='title'>
           这是一个标题
           </div>
      </header>
    );
  }
}
