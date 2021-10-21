import React from 'react';

const User = ({user}) => {
    const {id,name, username,email} = user
    return (
        <div>
            <h1>Load user data</h1>
            <h1>{name}</h1>
            <h3>{username}</h3>
            <p>{email}</p>
        </div>
    );
};

export default User;