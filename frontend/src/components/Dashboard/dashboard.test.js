/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../utils/testUtils';
import Dashboard from './index';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Dashboard Component', () => {
  test('should contain text Cameras', () => {
    render(<Dashboard />, container);
    expect(screen.getByText(/Cameras/i)).toBeInTheDocument();
  });
});
