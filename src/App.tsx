
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './routes/MainPage'
import AuthGuards from './layouts/AuthGuards'
import LoginPage from './routes/LoginPage'
import { ToastContainer } from 'react-toastify';
import RegisterPage from './routes/RegisterPage'
import UnAuthGuards from './layouts/UnAuthGuards'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<AuthGuards><LoginPage /></AuthGuards>} />
        <Route path='/register' element={<AuthGuards><RegisterPage /></AuthGuards>} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
