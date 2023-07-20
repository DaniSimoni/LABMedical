import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { LoginPage } from './assets/Pages/LoginPage/LoginPage.jsx'
import { HomePage } from './assets/Pages/HomePage/HomePage.jsx'
/* import { CriarContaPage } from './assets/Pages/CriarContaPage/CriarContaPage.jsx'
 */import { Layout } from './layout/Layout.jsx'
import { PacientePage } from './assets/Pages/CadastroPaciente/CadastroPaciente.jsx'
import { ConsultaPage } from './assets/Pages/CadastroConsulta/CadastroConsulta.jsx'
import { ExamePage } from './assets/Pages/CadastroExame/CadastroExame.jsx'

/* import { LocalStorageService } from './Service/User/LocalStorage.server.jsx'
import { ConsultaPage } from './assets/Pages/CadastroPaciente/CadastroConsulta';

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
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/paciente' element={<PacientePage/>}/>
              <Route path='/consulta' element={<ConsultaPage/>}/>
              <Route path='/exame' element={<ExamePage/>}/>
          </Route>
        {/*   <Route path='/criarConta' element={<CriarContaPage/>}/> */}
          <Route path='*' element={<><p>Essa página não existe</p></>}/>
       </Routes>
    </Router>
  )
}

export default App
