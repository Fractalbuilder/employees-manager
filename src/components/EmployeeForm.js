import React, { useState } from 'react';

const EmployeeForm = ({addEmployee}) => {
    const defaultNewEmployee = {
        id: "",
        name: "",
        job: ""
    };

    const [newEmployee, setNewEmployee] = useState(defaultNewEmployee);

    const handleUserChange = (e) => {
        setNewEmployee({
            ...newEmployee,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        addEmployee({
            id: newEmployee.id,
            name: newEmployee.name,
            job: newEmployee.job
        });

        setNewEmployee(defaultNewEmployee)
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
                                value={newEmployee.id}
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
                                value={newEmployee.name}
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
                                value={newEmployee.job}
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
                >Add</button>
            </form>
        </div>
    )
}

export default EmployeeForm
