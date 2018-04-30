/*
	see https://github.com/react-boilerplate/react-boilerplate/blob/master/app/containers/HomePage/tests/index.test.js
*/
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';

describe('<Home />', () => {
	it('renders without crashing', () => {
		shallow(<Home />);
	});
});