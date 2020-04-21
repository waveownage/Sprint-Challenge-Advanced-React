import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import NavBar from './navBar';


it('Nav has a class', () => {
    const { getByTestClass } = render(<App />);

    getByTestClass(/navbar/i)
}