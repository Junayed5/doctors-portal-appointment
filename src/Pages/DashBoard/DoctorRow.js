import React from 'react';

const DoctorRow = ({ doctor, index,setDeletedDoctor }) => {
    // console.log(doctor);
    const { name, specialty, img, } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <th>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </th>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletedDoctor(doctor)} htmlFor="my-modal-3" className="btn modal-button btn-xs btn-error">Delete</label>
            </td>
        </tr >
    );
};

export default DoctorRow;