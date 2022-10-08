import React from 'react';

const Mygallery = ({ myGallery }) => {
    const { name, img, uploadby } = myGallery;
    return (
        <div className="card w-[350px] h-[350px] lg:max-w-lg bg-base-100 shadow-xl">
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Mygallery;