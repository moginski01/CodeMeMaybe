import React from 'react';
import './home.css';
import video from '../../assets/video.mp4'
import main_photo from '../../assets/main_img.png'


const Home = () => {
    return (
        <div className="codememaybe__header section__padding">
            <div className="codememaybe__header_content">
                <h1 className="gradient__text">Let's work with us!</h1>
                <p>Welcome to our platform for programming tasks! Whether you're a developer looking for exciting
                    projects or someone in need of technical solutions, you've come to the right place.</p>
                <p>Our platform allows clients to easily post programming tasks and receive proposals from experienced
                    programmers. With a simple and user-friendly interface, you can quickly connect with talented
                    individuals who can help you bring your projects to life.</p>
            </div>
            <div className="codememaybe__header_image">
                <img className="main_image" src={main_photo} alt="logo"/>
            </div>
        </div>
    );
}

export default Home;