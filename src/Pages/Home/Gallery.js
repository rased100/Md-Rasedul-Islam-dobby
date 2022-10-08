import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Gallery = () => {
    const [mygallery, setMygallery] = useState([]);
    const [user] = useAuthState(auth);
    console.log('mygallery', mygallery)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/gallery?uploadby=${user.email}`)
                .then(res => res.json())
                .then(data => setMygallery(data));
        }
    }, [user])
    return (
        <div>
            <h2>My Gallery: {mygallery.length}</h2>
        </div>
    );
};

export default Gallery;