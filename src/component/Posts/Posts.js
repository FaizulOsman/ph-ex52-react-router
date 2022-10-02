import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData()

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }

        </div>
    );
};

export default Posts;