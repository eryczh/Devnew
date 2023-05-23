import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Header from './components/Header';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Performance from './components/Performance';


function RouterApp() {
    return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/sobre" element={<Sobre />} />
            

        </Routes>
    </BrowserRouter>
    )
}
export default RouterApp;