import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, email } = friend

    return (
        <div style={{ border: '3px solid tomato' }}>
            <h4>userName: <Link to={`/friend/${id}`}>{name}</Link></h4>
            <p>{email}</p>
        </div>
    );
};

export default Friend;