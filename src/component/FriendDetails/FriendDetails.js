import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()

    return (
        <div>
            <h4>Name: {friend.name}</h4>
            <p>Email: {friend.email}</p>
        </div>
    );
};

export default FriendDetails;