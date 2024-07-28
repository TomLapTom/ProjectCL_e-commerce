import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import './css/styles.css';
import { ColorModeProvider } from './context/color-mode/color-mode-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);
