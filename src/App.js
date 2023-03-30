import React from 'react';

import {Aboutus, Feature, Footer, Header, Possibility} from "./containers";
import {Article, Brand, CTA, Navbar} from "./components";
import './App.css';

const App = () => {
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
        </div>
    );
};

export default App;