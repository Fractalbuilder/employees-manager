import React from 'react'

const EmployeesGrid = ({ employees, prepareEmployeeUpdate, deleteEmployee }) => {
    return (
        <div>
            <h3>Employees' Grid</h3>
            <br></br>
            <div className="form-row">
                {employees.map((employee) => {
                    return (
                        <div key={employee.id} className="col-12 col-md-6 col-lg-6">
                            <div className="item">
                                <div className="form-row">
                                    <div className="col-3 col-md-3 col-lg-3">
                                        <p className="item-title">{employee.name}</p>
                                    </div>
                                    <div className="col-6 col-md-6 col-lg-6">
                                        <p className="item-text"><b>Id:</b> {employee.id}</p>
                                        <p className="item-text"><b>Job:</b> {employee.job}</p>
                                    </div>
                                    <div className="col-3 col-md-3 col-lg-3" style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <button className="common-button" onClick={() => prepareEmployeeUpdate(employee)}><i className="fas fa-pen"></i></button>
                                        &nbsp;
                                        <button className="common-button" onClick={() => deleteEmployee(employee.id)}><i className="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EmployeesGrid
