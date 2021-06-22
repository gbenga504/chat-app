import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import ThemeConfig from 'theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

const reactQueryConfig = {
  refetchOnWindowFocus: false,
  retry: false,
};

const defaultOptions = {
  queries: reactQueryConfig,
  mutations: reactQueryConfig,
};

const queryClient = new QueryClient({
  defaultOptions,
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeConfig>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeConfig>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
