import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";
import React from 'react';
import FirstStep from '../components/firstStep';
import Header from '../components/header';

const AppRouter = () => (
    <BrowserRouter>
    <div className = "container">
        <Header />
        <Routes>
            <Route path="/" component={FirstStep}/>
        </Routes>
    </div>
    </BrowserRouter>
);

export default AppRouter