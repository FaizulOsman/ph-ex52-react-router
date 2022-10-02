import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData()

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '30px' }}>
            {friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)}
        </div>
    );
};

export default Friends;