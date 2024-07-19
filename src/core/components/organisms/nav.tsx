import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <header>
      <div className=" container flex justify-between py-4 ">
        <Link href={'/'} className="font-bold text-lg" >Job Board</Link>
        <nav className=" flex gap-2  *:p-2 *:rounded-md">
          <Link  href={"/"} className="*:bg-gray-200">Login</Link>
          <Link href={"/"} className="bg-blue-600 text-white" >Post a Job</Link>
          <Link href={"/"}>hey</Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
