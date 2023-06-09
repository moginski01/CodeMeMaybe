import React from 'react';
import { Link, Route, Routes, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Navbar } from "./containers";
import { Aboutus, Agreement, Contact, Cookie, Faqs, Footer, Home, Login, Tasks, Privacy, Signup, NewTask, MyTasks} from "./components";
import './App.css';


const App = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow gradient__bg bg-gradient-to-br from-blue-600 to-gray-900">
                <Navbar />
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={300}>
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/aboutus" element={<Aboutus />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path='/privacy-policy' element={<Privacy />} />
                            <Route path='/cookies-policy' element={<Cookie />} />
                            <Route path='/terms-of-use' element={<Agreement />} />
                            <Route path='/faqs' element={<Faqs />} />
                            <Route path='/tasks' element={<Tasks />} />
                            <Route path='/tasks/new_task' element={<NewTask />} />
                            <Route path='/tasks/my_tasks' element={<MyTasks />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <Footer />
        </div>
    );
};

export default App;
