import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import  Login from './pages/Login'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="*" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
