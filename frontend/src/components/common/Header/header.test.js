/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from 'react-dom';
import Header from './index';

describe('Header Component', () => {
  test.only('should contain "home" text', () => {
    render(
      <Header />,
    );
    expect(screen.getByText(/Cameras/i)).toBeInDocument();
  });
});
