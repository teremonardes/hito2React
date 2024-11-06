// import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import RegisterPage from './components/Register'
import LoginPage from './components/Login'

function App () {
  return (
    <>
      <Navbar />
      {/* <Home></Home> */}
      <RegisterPage />
      <LoginPage />
      <Footer />

    </>
  )
}

export default App
