import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { LoginPage } from './assets/Pages/LoginPage/LoginPage.jsx'
import { HomePage } from './assets/Pages/HomePage/HomePage.jsx'
import { CriarContaPage } from './assets/Pages/CriarContaPage/CriarContaPage.jsx'


function App() {
  return (

    <Router>
      <Routes>

          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/criarConta' element={<CriarContaPage/>}/>
          <Route path='*' element={<><p>Essa página não existe</p></>}/>
       </Routes>
    </Router>
  )
}

export default App
