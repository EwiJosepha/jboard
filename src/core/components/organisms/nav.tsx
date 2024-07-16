import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <header>
      <div className="flex justify-between bg-blue-400">
        <Link className="font-bold text-lg" href={'/'} >Job Board</Link>
        <nav className=" flex gap-2  *:p-2 *:rounded-md">
          <Link className="*:bg-gray-200" href={"/"}>Login</Link>
          <Link className="bg-blue-500 text-white" href={"/"}>Post a Job</Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
