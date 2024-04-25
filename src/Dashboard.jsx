import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './assets/pages/home';
import { Contact } from './assets/pages/contact';
import { AboutUs } from './assets/pages/aboutUs';

import { Header } from './assets/component/header';
import { Nav } from './assets/component/nav';


function Dashboard() {
    return (
        < >
            <div className=''>
                <div className='main'>
                    <Header />
                    <div className='container2'>
                        <Nav />
                        <div className='bodynav'>
                            <Routes>
                                <Route path="/" element={<Home />}></Route>
                                <Route path="/home" element={<Home />}></Route>
                                <Route path="/contact" element={<Contact />}></Route>
                                <Route path="/AboutUs" element={<AboutUs />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
