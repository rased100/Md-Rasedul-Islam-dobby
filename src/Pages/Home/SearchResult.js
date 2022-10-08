import React from 'react';

const SearchResult = ({ result }) => {
    const { name, img, uploadby } = result;
    return (
        <div className="card w-[350px] h-[350px] lg:max-w-lg bg-base-100 shadow-xl">
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default SearchResult;