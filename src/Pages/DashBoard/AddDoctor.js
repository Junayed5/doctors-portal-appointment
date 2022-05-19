import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,resetField } = useForm();

    const imageKey = '331d6f8e4501dae59b8506222ed988c1';


    const onSubmit = async data => {
        console.log(data);
        const image = data.image[0]

        const formData = new FormData();
        formData.append('image',image);

        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`

        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if (result.success === true) {
                const img = result.data.url;
                const doctor = {
                    name:data.name,
                    email:data.email,
                    specialty:data.specialty,
                    img:img
                }
                fetch('http://localhost:5000/doctor',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization: `Bearar ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })    
                .then(res => res.json())            
                .then(insert => {
                    if (insert.success) {
                        toast.success('Doctor added successfully');
                        resetField();
                    }
                })
            }
        })
    };

    const { data: services } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()));



    return (
        <div>
            <h2 className='text-2xl'>Add a new doctor</h2>
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
                        <span className="label-text">Specialty</span>
                    </label>

                    <select {...register('specialty')} className="select w-full max-w-xs">
                        {
                            services?.map(service => <option
                            key={service._id}
                            value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='text-red-700'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-700'>{errors.email.message}</span>}
                    </label>
                </div>
                <input type="submit" className='btn  w-full max-w-xs' value='ADD' />
            </form>
        </div>
    );
};

export default AddDoctor;