import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/DobbyLogo_s.webp';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="upload">Upload</Link></li>
                        <li><Link to="gallery">Gallery</Link></li>
                        {user ? <li><Link className='text-cyan-500' onClick={logout}>SignOut</Link></li> : <>
                            <li><Link className='text-cyan-500' to="/login">Login</Link></li>
                            <li><Link className='text-cyan-500' to='/signup'>Signup</Link></li>
                        </>}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl bg-primary mx-2"><img src={logo} alt="dobby" /></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="upload">Upload</Link></li>
                    <li><Link to="gallery">Gallery</Link></li>
                    {user ? <li><Link className='text-cyan-500' onClick={logout}>SignOut</Link></li> : <>
                        <li><Link className='text-cyan-500' to="/login">Login</Link></li>
                        <li><Link className='text-cyan-500' to='/signup'>Signup</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;