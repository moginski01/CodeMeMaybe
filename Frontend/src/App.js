import React from 'react';
import { Link, Route, Routes, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Navbar } from "./containers";
import { Aboutus, Agreement, Contact, Cookie, Faqs, Footer, Home, Login, Privacy, Signup } from "./components";
import './App.css';

const App = () => {
    const location = useLocation();

    return (
        <div className="App">
            <div className="gradient__bg bg-gradient-to-br from-blue-600 to-gray-900">
                <Navbar />
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={300}>
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/aboutus" element={<Aboutus />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        </div>
    );
};

export default App;