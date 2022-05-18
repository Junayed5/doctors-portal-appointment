import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading,refetch } = useQuery('user', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization:`Bearar ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-2xl'>All Users{users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users?.map(user => <UserRow
                            key={user?._id}
                            user={user}
                            refetch ={refetch}
                            />    )
                        }
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr> */}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;