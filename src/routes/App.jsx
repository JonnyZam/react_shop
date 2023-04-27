import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import Layout from '../container/Layout';
import Login from '../container/Login';
import MyAccount from '../container/MyAccount';
import NewPassword from '../container/NewPassword';
import RecoveryPassword from '../container/RecoveryPassword';
import NotFound from '../pages/NotFound';

import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/> 
                    <Route path="/my-account" element={<MyAccount />}/>  
                    <Route path="/new-password" element={<NewPassword />}/>
                    <Route path="/recovery-password" element={<RecoveryPassword />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
