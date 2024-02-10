import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import SignInForm from "./pages/SignInForm"
import SignUp from "./pages/SignUp"
import ProfileManagementPage from "./pages/ProfileManagementPage"
import Dashboard from "./pages/Dashboard"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInForm/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/profile" element={<ProfileManagementPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
