/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
// Import your own reducer
import { Route, MemoryRouter } from 'react-router-dom';
import configureStore from '../redux/store/index';

function render(
  ui,
  {
    initialState,
    ...renderOptions
  } = {},
  urlParam,
) {
  function Wrapper({ children }) {
    return (
      <Provider store={configureStore(initialState)}>
        <MemoryRouter initialEntries={['/23']}>
          <Route path={`/:${urlParam}`}>
            {children}
          </Route>
        </MemoryRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
