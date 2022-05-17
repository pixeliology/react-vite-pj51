import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SideBar from './components/Nav'
import ProfileBarContainer from './components/Profilebar'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <SideBar />
      <ProfileBarContainer />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
