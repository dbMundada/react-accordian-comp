import React from 'react';
import Accordian from './Accordian';
import { shallow } from 'enzyme';

describe('#Accordian: ', () => {
    it('render simple accordian: Open', () => {
        const expandFn = jest.fn();

        const container = shallow(
          <Accordian
            headerContent='Simple/Dummy Accordian'>
            <span>This is test</span>
          </Accordian>
        );

        expect(container.find('.accordian-body.open')).toHaveLength(1);
        expect(container.find('.accordian-body.close')).toHaveLength(0);

        expect(container.find('.accordian-icon.open')).toHaveLength(1);
        expect(container.find('.accordian-icon.close')).toHaveLength(0);
    });

    it('render simple accordian: Close', () => {
        const expandFn = jest.fn();

        const container = shallow(
          <Accordian
            isOpen={false}
            headerContent='Simple/Dummy Accordian'>
            <span>This is test</span>
          </Accordian>
        );

        expect(container.find('.accordian-body.open')).toHaveLength(0);
        expect(container.find('.accordian-body.close')).toHaveLength(1);

        expect(container.find('.accordian-icon.open')).toHaveLength(0);
        expect(container.find('.accordian-icon.close')).toHaveLength(1);
    });


    it('render simple accordian: Disabled', () => {
        const expandFn = jest.fn();

        const container = shallow(
          <Accordian
            disabled={true}
            headerContent='Simple/Dummy Accordian'>
            <span>This is test</span>
          </Accordian>
        );

        expect(container.find('.accordian-body.open')).toHaveLength(1);
        expect(container.find('.accordian-header.disabled')).toHaveLength(1);
    });
});
