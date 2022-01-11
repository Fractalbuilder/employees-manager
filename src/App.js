import './App.css';
import Header from './components/Header';
import EmployeeForm from './components/EmployeeForm';
import EmployeeUpdateForm from './components/EmployeeUpdateForm';
import EmployeesGrid from './components/EmployeesGrid';
import React, { useState, useEffect } from 'react';

function App() {
  const localIp = 'http://192.168.1.8:8000';
  const defaultEmployees = [];
  const [employees, setEmployees] = useState(defaultEmployees);
  const [employeeToUpdate, setEmployeeToUpdate] = useState({id:"", name:"", job:""});

  const getEmployees = async () => {
    fetch(localIp + '/employees')
    .then(response => response.json())
    .then(jsonResponse => {
      setEmployees(jsonResponse.data)
    })
  }

  const addEmployee = async (employee) => {
    fetch(localIp + '/employees', {
      method: 'POST',
      body: JSON.stringify({
        id: employee.id,
        name: employee.name,
        job: employee.job
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      getEmployees();
      console.log(jsonResponse.message);
    });
  }

  const prepareEmployeeUpdate = (employee) => {
    document.getElementById("update-container").style = "display: block";
    setEmployeeToUpdate(employee);
  }

  const updateEmployee = async (employee) => {
    fetch(localIp + '/employees/' + employee.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: employee.id,
        name: employee.name,
        job: employee.job
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      document.getElementById("update-container").style = "display: none";
      getEmployees();
      console.log(jsonResponse.message);
    });
  }
  
  const deleteEmployee = async (id) => {
    fetch(localIp + '/employees/' + id, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(jsonResponse => {
      getEmployees();
      console.log(jsonResponse.message);
    });
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className="App">
      <div id="main-container">
        <Header title={'Employees'} />
        <hr></hr>
        <h3>New Employee</h3>
        <br></br>
        <EmployeeForm addEmployee={addEmployee} />
        <hr></hr>
        <EmployeesGrid employees={employees} prepareEmployeeUpdate={prepareEmployeeUpdate} deleteEmployee={deleteEmployee} />
        <div id="update-container" style={{display: 'none'}}>
          <hr></hr>
          <h3>Update Employee</h3>
          <br></br>
          <EmployeeUpdateForm updateEmployee={updateEmployee} employeeToUpdate={employeeToUpdate} setEmployeeToUpdate={setEmployeeToUpdate} />
        </div>
      </div>
    </div>
  );
}

export default App;