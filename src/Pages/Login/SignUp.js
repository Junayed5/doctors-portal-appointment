import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    let errorMSG;

    if (user || gUser) {
        console.log(gUser || user);
    }
    if (error || gError || updateError) {
        errorMSG = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }
    if (loading || gLoading || updating) {
        return <Loading />
    }

    // const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name });
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='text-red-700'>{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                                        message: 'Enter a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='text-red-700'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-700'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must have 6 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='text-red-700'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-700'>{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMSG}
                        <input type="submit" className='btn  w-full max-w-xs' value='sign Up' />
                    </form>
                    <p className='text-center'><small>Already Have An Account<Link to='/login' className='text-primary'>Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;