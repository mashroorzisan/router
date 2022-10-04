import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blogs from '../blogs/Blogs';
import './home.css'


const Home = () => {
    const kisuEkta = useLoaderData();
    return (
        <div>

            <h1>we have {kisuEkta.length}</h1>
            <div className='inner-container '>

                <div className='text showgrid'>
                    {
                        kisuEkta.map(protita => <Blogs
                            key={protita.id}
                            protita={protita}
                        ></Blogs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;