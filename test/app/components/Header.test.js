/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/24.
 */
import Header from 'components/Header';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('Hello Tmall', function() {
    let cp = ReactDOM.render(<Header/>, container);
    let welcome = TestUtils.findRenderedComponentWithType(cp, Header);
    ReactDOM.findDOMNode(welcome).textContent.should.be.eql('易世达这是一个logo菜单一菜单二');
  });
});