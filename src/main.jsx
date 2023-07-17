import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './Global.style.jsx'
import { HeaderProvider } from './assets/Context/Header.context.jsx'
import CardPaciente from './assets/Components/CardPaciente/CardPaciente.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>

    <HeaderProvider>
    <App/>
    </HeaderProvider>
    <CardPaciente/>

   
  </React.StrictMode>,
)
