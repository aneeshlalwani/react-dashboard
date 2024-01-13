import { useState } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

import './App.css'

function App() {
  const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

  const openSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
  }
  return (
    <>
        <div className="grid-container">
            <Header openSideBar={openSideBar} />
            <Sidebar openSideBarToggle={openSideBarToggle} openSideBar={openSideBar} />
            <Home />
        </div>
    </>
  )
}

export default App
