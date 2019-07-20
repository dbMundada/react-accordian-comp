import React from 'react';
import {
  SimpleAccordianExample,
  DisabledAccordianExample,
  ControllableAccordianExample,
  AccordianGroupExample,
  NestedAccordianExample
} from './Examples';

const MainPage  = () => (
  <div>
    <h1 className='page-title'>React Accordian Component</h1>
    <SimpleAccordianExample />
    <DisabledAccordianExample />
    <ControllableAccordianExample />
    <AccordianGroupExample />
    <NestedAccordianExample />
  </div>
);

export default MainPage;
