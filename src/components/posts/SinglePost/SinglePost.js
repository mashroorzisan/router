import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../posts.css'

const SinglePost = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div>
            <h1>{title}</h1>
            <p className='text'>{body.slice(0, 200)}</p>
            <Link to={`/post/${id}`}>
                <button>show posts</button>
            </Link>
            <Link to={`/post/${id}`}>
                show posts {id}
            </Link>
            <button onClick={handleNavigate}>show posts with handle</button>
        </div>
    );
};

export default SinglePost;