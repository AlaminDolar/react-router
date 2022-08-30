import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams();
    const [deatil, setDetail] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${params.friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data));
    }, [])


    return (
        <div>
            <h1>This is Omok: {params.friendId}</h1>
            <h3>Name: {deatil.name}</h3>
            <h4>Email: {deatil.email}</h4>


        </div>
    );
};

export default FriendDetail;