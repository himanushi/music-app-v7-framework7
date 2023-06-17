// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
Framework7.use(Framework7React)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
