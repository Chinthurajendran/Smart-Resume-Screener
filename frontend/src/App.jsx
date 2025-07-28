import React from 'react'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ResumeScreener from './ResumeScreener'

function App() {
  return (
    <div>
      <ToastContainer />
      <ResumeScreener/>
    </div>
  )
}

export default App
