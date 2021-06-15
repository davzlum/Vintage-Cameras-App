/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from 'react-dom';
import Dashboard from './index';

describe('Dashboard Component', () => {
  test.only('should contain "Cameras" text', () => {
    render(
      <Dashboard />,
    );
    expect(screen.getByText(/Cameras/)).toBeInDocument();
  });
});
