
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './routes/MainPage'
import AuthGuards from './layouts/AuthGuards'
import LoginPage from './routes/LoginPage'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<AuthGuards><LoginPage /></AuthGuards>} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
