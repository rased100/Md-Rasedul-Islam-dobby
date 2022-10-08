import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Mygallery from './Mygallery';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/gallery?uploadby=${user.email}`)
                .then(res => res.json())
                .then(data => setGallery(data));
        }
    }, [user]);
    let yourImage;
    if (user) {
        yourImage = <h2 className="text-3xl py-10">{user.displayName}'s Images</h2>
    }
    else {
        yourImage = <h2 className="text-3xl py-10">Your Images</h2>
    }
    return (
        <div className='py-10'>
            {yourImage}
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