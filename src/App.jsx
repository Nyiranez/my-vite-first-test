
import './App.css'
import { Home } from './assets/pages/home';
import { Contact } from './assets/pages/contact';
import { AboutUs } from './assets/pages/aboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './assets/component/header';
import { Nav } from './assets/component/nav';
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container2'>
          <Nav />
          <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
