import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './assets/pages/login';
import { SignUp } from './assets/pages/signup';
import Dashboard from './Dashboard';

function App() {


  return (
    < >
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
