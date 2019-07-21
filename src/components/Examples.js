import React, { Component } from 'react';
import Accordian from './Accordian';
import AccordianGroup from './AccordianGroup';

const DUMMY_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const SimpleAccordianExample = () => {
  return (
    <div className='row'>
      <h3>Simple/Dummy Accordian</h3>
      <Accordian
        headerContent='Simple/Dummy Accordian'>
        <span>{DUMMY_TEXT}</span>
      </Accordian>
    </div>
  );
};

export const AccordianGroupExample = () => {
  return (
    <div className='row'>
      <h3>Accordian Group</h3>
      <AccordianGroup
        initialOpenAccordian={2}
        accordiansList={[
          {
            headerContent: 'Header1',
            disabled: false,
            bodyContent: () => (<h2>{DUMMY_TEXT}</h2>)
          },
          {
            headerContent: 'Header2',
            disabled: false,
            bodyContent: () => (<h3>{DUMMY_TEXT}</h3>)
          },
          {
            headerContent: 'Header3',
            disabled: false,
            bodyContent: () => (<h5>{DUMMY_TEXT}</h5>)
          }
        ]}/>
      <br/><br/>
      <AccordianGroup
        initialOpenAccordian={1}
        accordiansList={[
          {
            headerContent: 'Header1',
            disabled: false,
            bodyContent: () => (<h2>{DUMMY_TEXT}</h2>)
          },
          {
            headerContent: 'Header2',
            disabled: false,
            bodyContent: () => (<h3>{DUMMY_TEXT}</h3>)
          },
          {
            headerContent: 'Header3',
            disabled: true,
            bodyContent: () => (<h5>{DUMMY_TEXT}</h5>)
          }
        ]}/>
    </div>
  );
};

export const DisabledAccordianExample = () => {
  return (
    <div className='row'>
      <h3>Disabled Accordian</h3>
      <Accordian
        disabled={true}
        headerContent='Disabled Accordian'>
        <span>{DUMMY_TEXT}</span>
      </Accordian>
    </div>
  );
};

export const NestedAccordianExample = () => {
  return (
    <div className='row'>
      <h3>Nested Example</h3>
      <Accordian
        headerContent='Nested Accordians'>
        <Accordian
          headerContent='Header1'>
          <Accordian
            headerContent='Header2'>
            <Accordian
              headerContent='Header3'>
              <span>{DUMMY_TEXT}</span>
            </Accordian>
          </Accordian>
        </Accordian>
      </Accordian>
    </div>
  );
};

export class ControllableAccordianExample extends Component {
  state = { controllableAccordian: false };

  render() {
    const { controllableAccordian } = this.state;

    return (
      <div className='row'>
        <h3>Externally Controllable Accordian</h3>
        <button className='control-btn'
          onClick={() => this.setState({controllableAccordian: !controllableAccordian })}>
          Toggle Accordian
        </button>
        <br/><br/>
        <Accordian
          isOpen={controllableAccordian}
          headerContent='Externally Controllable Accordian'>
          <span>{DUMMY_TEXT}</span>
        </Accordian>
      </div>
    );
  }
}
