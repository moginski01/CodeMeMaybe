import React from 'react';
import './home.css';
import video from '../../assets/video.mp4'
import main_photo from '../../assets/main_img.png'


const Home = () => {
    return (
        <div className="codememaybe__header section__padding flex flex-col md:flex-row md:items-center md:justify-between mt-10">
            <div className="codememaybe__header_content max-w-lg mx-auto md:mx-0 md:text-left xs:my-40 text-center">
                <h1 className="gradient__text text-6xl md:text-8xl mb-4">Let's work with us!</h1>
                <p className="text-xl md:text-2xl mb-4">Welcome to our platform for programming tasks! Whether you're a developer looking for exciting
                    projects or someone in need of technical solutions, you've come to the right place.</p>
                <p className="text-xl md:text-2xl mb-4">Our platform allows clients to easily post programming tasks and receive proposals from experienced
                    programmers. With a simple and user-friendly interface, you can quickly connect with talented
                    individuals who can help you bring your projects to life.</p>
            </div>
            <div className="codememaybe__header_image flex justify-center md:justify-end">
                <img className="main_image w-full max-w-lg h-auto md:max-w-none" src={main_photo} alt="logo"/>
            </div>
        </div>
    );
}

export default Home;
