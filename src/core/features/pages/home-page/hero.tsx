import React from 'react'

function HeroSection() {
  return (
    <section className= ' container my-16'>
      <h1 className='text-4xl font-bold text-center font-sans'>
        Find your dream job
      </h1>
      <form className='flex gap-2 mt-4 max-w-md mx-auto'>
        <input type='search' className="border border-gray-400 w-full py-2 px-3 rounded-md " placeholder='Search Job...' />
        <button type='button' className='bg-blue-600 text-white py-2 px-4 rounded-md'>Search</button>
      </form>
    </section>
  )
}

export default HeroSection
