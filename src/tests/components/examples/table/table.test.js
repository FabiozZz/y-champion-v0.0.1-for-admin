import {unmountComponentAtNode} from "react-dom";
import {shallow,mount} from "enzyme";
import React from 'react';
import {TableS} from "../../../../components/Examples/Table/Table";
import {screen} from "@testing-library/react";

jest.mock('react-redux');

describe('TableS component rendering', function () {
    let container;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    test('should rendering table', () => {
        let data = [];
        let wrapper = mount(<TableS data={data}/>,container);
        wrapper.debug();
    });
});