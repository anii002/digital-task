import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './component/header';
import Home from './pages/home';
import Footer from './component/footer';
import DashBoard from './pages/Dashboard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './index.css';

library.add(fas);

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="Content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
