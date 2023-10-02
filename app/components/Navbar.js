import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Job from './Job.png';

const Navbar = () => {
  return (
    <nav>
        <Image
            src={Job}
            alt= 'Employee Help Desk'
            width={70}
            quality={100}
            placeholder='blur'
         />
        <h1>Employee HelpDesk</h1>
        <Link href='/'>Dashboard</Link>
        <Link href='/employeesList'>Employees List</Link>
    </nav>
  )
}

export default Navbar