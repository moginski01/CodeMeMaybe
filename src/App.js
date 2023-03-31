import React from 'react';
import {Link, Route, Routes} from "react-router-dom"

import {Navbar} from "./containers";
import {Aboutus, Agreement, Contact, Cookie, Faqs, Footer, Home, Login, Privacy, Signup} from "./components";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/aboutus" element={<Aboutus/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};

export default App;