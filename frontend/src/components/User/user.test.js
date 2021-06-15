/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../utils/testUtils';
import User from './index';

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

describe('User Component', () => {
  test('should contain text My profile', () => {
    render(<User />, container);
    expect(screen.getByText(/My profile/i)).toBeInTheDocument();
  });
});
