import { connect } from 'react-redux';
import css from 'react-css-modules';
import { Header } from 'components/Header';
import styles from './style.css';
import headerStyle from './header.css';
// const { func, string, object } = PropTypes;
console.log(styles);
@css(styles)
export class App extends Component {
  // static propTypes = {
  //   logout: func.isRequired,
  //   replacePath: func.isRequired,
  //   reset: func.isRequired
  // };


  render() {
    const { children } = this.props;
    return (
      <div >
    <Header styles={styles} />
        <div styleName='name'>
asdasdasd
          <section >
            {children}
          </section>
        </div>

      </div>
    );
  }
}



export default App;
