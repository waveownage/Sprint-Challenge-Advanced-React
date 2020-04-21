import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Womens World Cup Players show as title', () => {
  const { getByText } = render(<App />);

  getByText(/Women's World Cup Players/i);
});

