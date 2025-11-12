
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './routes/MainPage'
import AuthGuards from './layouts/AuthGuards'
import LoginPage from './routes/LoginPage'
import { ToastContainer } from 'react-toastify';
import RegisterPage from './routes/RegisterPage'
import UnAuthGuards from './layouts/UnAuthGuards'
import TasksPage from './routes/TasksPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<UnAuthGuards><LoginPage /></UnAuthGuards>} />
        <Route path='/register' element={<UnAuthGuards><RegisterPage /></UnAuthGuards>} />
        <Route path='/tasks' element={<AuthGuards><TasksPage /></AuthGuards>} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
