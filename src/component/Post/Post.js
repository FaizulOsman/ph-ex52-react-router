import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/post/${post.id}`)
    }

    return (
        <div style={{ border: '2px solid tomato' }}>
            <p>{post.title}</p>
            <small>{post.body}</small><br />
            <Link to={`/post/${post.id}`}>First Way</Link>
            <Link to={`/post/${post.id}`}><button>Second Way</button></Link>
            <button onClick={handleNavigate}>Third Way</button>
        </div>
    );
};

export default Post;