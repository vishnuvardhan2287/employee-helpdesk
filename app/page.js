import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Employee Management App</p>

      <div className="flex justify-center my-8">
      <Link href="/employeesList/create">
          <button className="btn-primary">Create Employee</button>
        </Link>
        <div className='mr-4'></div>
        <Link href="/employeesList">
          <button className="btn-primary">View Employee List</button>
        </Link>
      </div>
    </main>
  )
}
