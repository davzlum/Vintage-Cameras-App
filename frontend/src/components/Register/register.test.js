/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../utils/testUtils';
import Register from './index';

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

describe('Register Component', () => {
  test('should contain text name', () => {
    render(<Register />, container);
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
});
