import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdviceProvider from "./context/AdviceContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdviceProvider>
    <App />
    </AdviceProvider>
  </React.StrictMode>
);
