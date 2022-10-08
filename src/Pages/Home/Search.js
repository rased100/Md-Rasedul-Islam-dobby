import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SearchResult from './SearchResult';

const Search = () => {
    const [result, setResult] = useState([]);

    const handleSearch = event => {
        event.preventDefault();

        let search = {
            name: event.target.name.value
        }
        const inputSearch = search.name;
        const url = `http://localhost:5000/search?name=${inputSearch}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setResult(data));

    }

    return (
        <>

            <div className='py-10 flex justify-center'>
                <div className='grid grid-cols-1'>
                    <div className="form-control p-10 mx-auto">
                        <form onSubmit={handleSearch}>
                            <div className="form-control">
                                <div className="input-group">
                                    <input type="text" name="name" placeholder="Search…" className="input input-bordered" />
                                    <button type='submit' className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                            {
                                result.map(result => <SearchResult result={result} key={result._id}></SearchResult>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Search;