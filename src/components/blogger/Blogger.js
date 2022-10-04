import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './blogger.css'

const Blogger = () => {
    const blogger = useLoaderData();
    const { name, email, username } = blogger;
    return (
        <div className='blogger'>
            <h1>Name:{name}</h1>
            <h2>Email:{email}</h2>
            <h3>Username:{username}</h3>
        </div>
    );
};

export default Blogger;