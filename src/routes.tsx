import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import  PersonagensPage  from './pages/Main/Personagens'
import VilaoPage from './pages/Main/Viloes'
import HistoriasPage from './pages/Main/Historias'
import ContactPage from './pages/Main/Contact'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<PersonagensPage />} />
        <Route path='viloes' element={<VilaoPage />} />
        <Route path='historias' element={<HistoriasPage />} />
        <Route path='contatos' element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
