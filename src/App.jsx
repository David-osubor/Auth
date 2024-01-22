import {Routes, Route} from "react-router-dom"
import {useContext, useState} from "react"
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import SignUp from "./components/SignUp"
import ProtectedRoute from "./components/Protected"
import { AuthProvider } from './context/Context'
import { AuthContext } from './context/Context'
function App() {
  return (


       <AuthProvider>
     <Routes>
     
     <Route path="/" element={<Signin/>}/>
     <Route path="/signup" element={<SignUp/>}/>
     <Route path="/dashboard" 
     element={<ProtectedRoute>
     <Dashboard/>
     </ProtectedRoute>}/>      
     </Routes>
     </AuthProvider>

  )
}

export default App
