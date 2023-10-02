async function getEmployee(id){
    const res  = await fetch(`https://dummy.restapiexample.com/api/v1/employees/${id}`,{
    next:{
      revalidate: 60
    }
  })
  const data = res.json()
  return data
}

export default async function EmployeeDetails({params}){
    const employeeDetails = await getEmployee(params.id)
    return(
        <main>
            <nav>
                <h2>Employee Details</h2>
            </nav>
            <div className="card">
                <h3>{employeeDetails}</h3>
                <p>{employeeDetails.salary}</p>
                <p>{employeeDetails.age}</p>
            </div>
        </main>
    )
}