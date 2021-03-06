import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hook/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    let errorMSG;
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || gUser);

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token,navigate,from])
    if (error || gError) {
        errorMSG = <p className='text-red-500'><small>{error.message || gError.message}</small></p>
    }
    if (loading || gLoading) {
        return <Loading />
    }

    // const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input type="submit" className='btn  w-full max-w-xs' value='Login' />
                    </form>
                    <p className='text-center'><small>New To Doctors Portal <Link to='/signup' className='text-primary'>Create An Account</Link></small></p>
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

export default Login;