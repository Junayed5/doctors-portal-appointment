import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteDoctorModal from './DeleteDoctorModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {

    const [deletedDoctor, setDeletedDoctor] = useState(null);
    // console.log(deletedDoctor);
    const { data: doctors, isLoading,refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearar ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-purple-400 text-2xl'>Manage Doctors:{doctors.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor,index) => <DoctorRow
                            key={doctor._id}
                            doctor={doctor}
                            setDeletedDoctor={setDeletedDoctor}
                            index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {deletedDoctor && <DeleteDoctorModal
                deletedDoctor={deletedDoctor}
                refetch={refetch}
                setDeletedDoctor={setDeletedDoctor}
            />}
        </div>
    );
};

export default ManageDoctor;