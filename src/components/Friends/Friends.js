import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h1>Hello Friends.How are you?</h1>
            <p><span>Parle kicu taka dis kub ovab a ase:{friends.length}</span></p>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}

                ></Friend>)
            }
        </div>
    );
};

export default Friends;