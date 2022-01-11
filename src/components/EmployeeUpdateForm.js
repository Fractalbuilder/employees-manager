import React, { useState } from 'react';

const EmployeeUpdateForm = ({updateEmployee, employeeToUpdate, setEmployeeToUpdate}) => {
    const handleUserChange = (e) => {
        setEmployeeToUpdate({
            ...employeeToUpdate,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        updateEmployee({
            id: employeeToUpdate.id,
            name: employeeToUpdate.name,
            job: employeeToUpdate.job
        });

        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <div className='col-12 col-md-3 col-lg-3'>
                        <div className="input-field">
                            <input
                                name='id' 
                                type='text'
                                placeholder='Id'
                                value={employeeToUpdate.id}
                                onChange={handleUserChange}
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className="input-field">
                            <input
                                name='name' 
                                type='text'
                                placeholder='Name'
                                value={employeeToUpdate.name}
                                onChange={handleUserChange}
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-lg-3'>
                        <div className="input-field">
                            <input
                                name='job' 
                                type='text'
                                placeholder='Job'
                                value={employeeToUpdate.job}
                                onChange={handleUserChange}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <button
                    className='common-button'
                    type='submit' 
                    value='Add User' 
                >Update</button>
            </form>
        </div>
    )
}

export default EmployeeUpdateForm
