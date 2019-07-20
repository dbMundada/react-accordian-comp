import React, { Component } from 'react';
import '../css/Accordian.css';
import { isFunction } from '../common/util';

class Accordian extends Component {
  state = { isOpen: true };

  onToggle = () => {
    const { onAccordianToggle, disabled  } = this.props;
    const { isOpen } = this.state;

    if (!disabled) {
      this.setState({
        isOpen: !isOpen
      }, () => {
        isFunction(onAccordianToggle) && onAccordianToggle(!isOpen)
      });
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { isOpen } = props;
    return (isOpen !== undefined) ? { isOpen } : state;
  }

  componentDidMount() {
    const { isOpen } = this.props;
    (isOpen !== undefined) && this.setState({ isOpen });
  }

  render() {
    const {
      headerContent,
      disabled,
      children
    } = this.props;
    const { isOpen } = this.state;

    return (
      <div className='accordian-panel'>
        <div className={'accordian-header ' + (disabled ? 'disabled' : '')}
          onClick={this.onToggle}>
          <span className={'accordian-icon ' + (isOpen ? 'open' : 'close')}>></span>
          <div className='header-content'>{headerContent}</div>
        </div>

        <div className={'accordian-body ' + (isOpen ? 'open' : 'close')}>
          <div className='accordian-pad'>{children}</div>
        </div>
      </div>
    );
  }
}

export default Accordian;
