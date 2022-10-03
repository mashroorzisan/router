import React from 'react';
import Header from '../header/Header';
import './home.css'


const Home = () => {
    return (
        <div>
            <Header></Header>

            <h1>This is real home component</h1>
            <div className='inner-container showgrid'>

                <div className='text'>
                    <h2>blog1</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quod assumenda dolores autem consequuntur, sint saepe? Vitae facere vero alias voluptatibus, voluptas culpa nihil a consequatur porro voluptate neque amet.</p>
                </div>
                <div className='text'>
                    <h2>blog1</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quod assumenda dolores autem consequuntur, sint saepe? Vitae facere vero alias voluptatibus, voluptas culpa nihil a consequatur porro voluptate neque amet.</p>
                </div>
                <div className='text'>
                    <h2>blog3</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quod assumenda dolores autem consequuntur, sint saepe? Vitae facere vero alias voluptatibus, voluptas culpa nihil a consequatur porro voluptate neque amet.</p>
                </div>
                <div className='text'>
                    <h2>blog4</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quod assumenda dolores autem consequuntur, sint saepe? Vitae facere vero alias voluptatibus, voluptas culpa nihil a consequatur porro voluptate neque amet.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;