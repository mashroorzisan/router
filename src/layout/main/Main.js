import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import './main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            < div className='inner-container' >
                <h1>The default page</h1>
                <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, illum! Quasi quos illo, aspernatur totam consectetur esse voluptatum eaque optio eligendi reprehenderit temporibus odit. Assumenda, corrupti facilis? Voluptate velit ipsam eligendi repellendus iusto blanditiis, nobis cupiditate, nemo magni labore animi!</p>
            </div >
        </div>
    );
};

export default Main;