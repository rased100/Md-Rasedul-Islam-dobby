import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';



const Upload = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();


    const imageStorageKey = 'd01560e63c2614f23eb8b648dee31350';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    console.log('dbuser', user.email)
                    console.log('name+email', data.name)
                    const nameEmail = data.name + " " + "by" + " " + user.email;
                    const uploadby = user.email;
                    const img = result.data.url;
                    const gallery = {
                        name: nameEmail,
                        // name: data.name,
                        img: img,
                        uploadby: uploadby
                    }
                    // send to database 
                    fetch('http://localhost:5000/gallery', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(gallery)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                console.log('Image uploaded successfully');
                                reset();
                                navigate('/');
                            }
                            else {
                                console.log('Failed to Upload Image');
                            }
                        })

                }
            })
    };


    return (
        <>
            <div className='flex h-auto justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl">Upload Your Image</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name of Image</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type Here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>



                            {/* Image */}

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                                </label>
                            </div>

                            {/* Upload */}

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Upload" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Upload;