/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Header from './index';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Header Component', () => {
  test.only('should contain "Cameras" text', () => {
    render(
      <Header />,
      container,
      {
        initialState: {
          cartList: [],
          user: {},
        },
      },
    );
    expect(container.querySelector('sections-list').textContent).toBe('Cameras');
  });
});
