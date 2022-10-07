import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user)
    }

    return (
        <div className='flex h-auto justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center">Login</h2>
                </div>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline my-2 mx-2"
                >Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;