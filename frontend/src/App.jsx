import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SignupPage from './pages/SignupPage.jsx'

import HomePage from "./pages/home/HomePage.jsx"
import LoginPage from './pages/LoginPage.jsx'
import Sidebar from "./components/common/SideBar.jsx";
import RightPanel from './components/common/RightPannel.jsx'
import { Toaster } from 'react-hot-toast'
import NotificationPage from './pages/notifications/NotificationPage.jsx'
import ProfilePage from './pages/profile/ProfilePage.jsx'
function App() {

  return (
    <div className='flex max-w-6xl mx-auto'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
      </Routes>
      <RightPanel />
      <Toaster />
    </div>
  )
}

export default App

