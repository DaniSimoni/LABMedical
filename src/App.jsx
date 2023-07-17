import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { LoginPage } from './assets/Pages/LoginPage/LoginPage.jsx'
import { HomePage } from './assets/Pages/HomePage/HomePage.jsx'
import { CriarContaPage } from './assets/Pages/CriarContaPage/CriarContaPage.jsx'


function App() {
  return (

    <Router>
      <Routes>

          <Route path='/' element={<LoginPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/criarConta' element={<CriarContaPage/>}/>

       </Routes>
    </Router>
  )
}

export default App
