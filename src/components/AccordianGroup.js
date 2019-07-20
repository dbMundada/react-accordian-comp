import React, { Component } from 'react';
import Accordian from './Accordian';
import { isFunction } from '../common/util';


class AccordianGroup extends Component {
  state = { openAccordianId: 0 };

  onToggle = (id, isOpen) => {
    const { onAccordianToggle, accordiansList  } = this.props;
    const disabled = accordiansList[id] && accordiansList[id].disabled;

    if (!disabled) {
      this.setState({
        openAccordianId: isOpen ? id : -1
      }, () => {
        isFunction(onAccordianToggle) && onAccordianToggle(id, isOpen)
      });
    }
  };

  componentDidMount() {
    const { initialOpenAccordian } = this.props;
    (initialOpenAccordian !== undefined) && this.setState({ openAccordianId: initialOpenAccordian });
  }

  render() {
    const { accordiansList } = this.props;
    const { openAccordianId } = this.state;

    return (
      <div className='accordian-group'>
      {
        accordiansList.map((item, index) => (
          <Accordian
            key={index}
            disabled={item.disabled}
            onAccordianToggle={(isOpen) => this.onToggle(index, isOpen)}
            isOpen={index === openAccordianId}
            headerContent={item.headerContent}>
            {item.bodyContent()}
          </Accordian>
        ))
      }
      </div>
    );
  }
}

export default AccordianGroup;
