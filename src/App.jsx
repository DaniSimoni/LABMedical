import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { LoginPage } from './assets/Pages/LoginPage/LoginPage.jsx'
import { HomePage } from './assets/Pages/HomePage/HomePage.jsx'
import { CriarContaPage } from './assets/Pages/CriarContaPage/CriarContaPage.jsx'
/* import { LocalStorageService } from './Service/User/LocalStorage.server.jsx'

  if(!LocalStorageService.get('users')) {
      LocalStorageService.set('users', [
        {
          id: 1,
          email: 'adm@labmedical.com',
          password: '12345678'
        },
        {
          id: 2,
          email: 'comercial@labmedical.com',
          password: '98765432'
        },
        {
          id: 3,
          email: 'ele@labmedical.com',
          password: '12457896'
        },
        {
          id: 4,
          email: 'ela@labmedical.com',
          password: '12345678'
        },
      ])
  }
 */

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
