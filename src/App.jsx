
import './App.css'
import {Home} from './assets/pages/home';
import {Contact} from './assets/pages/contact';
import {AboutUs} from './assets/pages/aboutUs';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
