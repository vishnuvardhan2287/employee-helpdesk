import React from 'react';

async function getEmployeesList(){
  await new Promise(resolve => setTimeout(resolve,1000))
  const res  = await fetch('https://dummy.restapiexample.com/api/v1/employees')
  const data = res.json()
  return data
  
}

 export default async function EmployeesList(){
  const employeesList = await getEmployeesList()
  return (
    <>
      {employeesList.data.map((employee) =>(
        <div key={employee.id} className='card my-5'>
          Name:<span className='mr-4'>{employee.employee_name}</span>
          Salary: <span className='mr-4'>{employee.employee_salary}</span>
          Age: <span className='mr-4'>{employee.employee_age}</span>
          {/* Profile Image: <span>{employee.profile_image}</span> */}
          <button className='bg-blue-400'>Update</button>
          <button className='bg-rose-400'>Delete</button>
        </div>
      ))}
    </>
  )
}

