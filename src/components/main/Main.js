import React from 'react';
import Header from '../header/Header';
import './main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>

            < div className='inner-container' >
                <h1>This is the default page</h1>
                <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, illum! Quasi quos illo, aspernatur totam consectetur esse voluptatum eaque optio eligendi reprehenderit temporibus odit. Assumenda, corrupti facilis? Voluptate velit ipsam eligendi repellendus iusto blanditiis, nobis cupiditate, nemo magni labore animi!</p>
            </div >
        </div>
    );
};

export default Main;