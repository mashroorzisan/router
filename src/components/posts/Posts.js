import React from 'react';
import './posts.css'
import { useLoaderData } from 'react-router-dom';
import SinglePost from './SinglePost/SinglePost';
import './posts.css'

const Posts = () => {
    const loaded = useLoaderData();
    console.log(loaded);
    return (
        <div className='inner-container gridnow'>
            {
                loaded.map(post => <SinglePost
                    key={post.id}
                    post={post}
                ></SinglePost>)
            }
        </div>
    );
};

export default Posts;