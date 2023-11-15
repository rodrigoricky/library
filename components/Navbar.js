import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img src="/assets/and2.png" alt="logo" />
            
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full' >
                View Output
            </button>
        </div>
    </div>
  )
}

export default Navbar