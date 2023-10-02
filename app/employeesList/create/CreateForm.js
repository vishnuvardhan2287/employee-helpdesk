"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')
  const [age, setAge] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newEmployee = {name,salary,age}

    const res = await fetch('https://dummy.restapiexample.com/api/v1/employees', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newEmployee)
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/employeesList')
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Name:</span>
        <input
          required 
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>Salary:</span>
        <input
          required
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
        />
      </label>

      <label>
        <span>Age:</span>
        <input
          required
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </label>
      
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add Ticket</span>}
    </button>
    </form>
  )
}