import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>

    </BrowserRouter>

  );
};
