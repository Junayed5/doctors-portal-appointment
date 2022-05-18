import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [appointment, setAppointment] = useState([]);
    console.log(appointment);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/booking?patientName=${user.email}`,{
            method:'GET',
            headers:{
                'authorization': `Barer ${localStorage?.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken');
                    navigate('/home');
                }
                return res.json()
            })
            .then(data => setAppointment(data));
    }, [])
    return (
        <div>
            <h3>My appointment{appointment.length}</h3>
            <div classNam="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment?.map((a,index) => <tr key={a.treatmentId}>
                                <th>{index + 1}</th>
                                <td>{a.patient}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;