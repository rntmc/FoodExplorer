import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components';
import { QuantityProvider } from './contexts/quantityContext'

import { AuthProvider } from './hooks/auth'

import theme from './styles/theme'

import {Routes} from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuantityProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <AuthProvider>
          <Routes/>  
        </AuthProvider>
      </ThemeProvider>
    </QuantityProvider>
  </React.StrictMode>,
)
