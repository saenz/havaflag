/*
	see https://github.com/react-boilerplate/react-boilerplate/blob/master/app/containers/HomePage/tests/index.test.js
*/
import React from 'react';
import { shallow } from 'enzyme';
import Products from '../index';

describe('<Products />', () => {
	it('renders without crashing', () => {
		shallow(<Products match={{url:'/products'}} />);
	});
});