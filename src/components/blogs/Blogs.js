import React from 'react';
import { Link } from 'react-router-dom';
import './blogs.css'

const Blogs = ({ protita }) => {
    const { name, id, username } = protita;
    return (
        <div>
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quod assumenda dolores autem consequuntur, sint saepe? Vitae facere vero alias voluptatibus, voluptas culpa nihil a consequatur porro voluptate neque amet.</p>


            <small className='smallname'>
                <Link to={`/blogs/${id}`}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="width">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>{username}</Link></small>
        </div>
    );
};

export default Blogs;