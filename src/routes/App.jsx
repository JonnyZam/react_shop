import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import Layout from '../container/Layout';
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
                    <Route path="/new-password" element={<NewPassword />}/>
                    <Route path="/recovery-password" element={<RecoveryPassword />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
