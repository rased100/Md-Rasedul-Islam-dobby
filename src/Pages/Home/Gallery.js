import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Mygallery from './Mygallery';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://calm-beyond-66537.herokuapp.com/gallery?uploadby=${user.email}`)
                .then(res => res.json())
                .then(data => setGallery(data));
        }
    }, [user]);

    return (
        <div className='py-10'>
            <h2 className="text-3xl py-10">All Images</h2>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        gallery.map(myGallery => <Mygallery myGallery={myGallery} key={myGallery._id}></Mygallery>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;