import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/friend/${post.userId}`)
    }

    return (
        <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;