import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar bg-secondary text-white'>
      <div className='flex-none '>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
      <div  className='flex-1'>
        <Link href={'/'} className='btn btn-ghost text-xl'>Best Music Ever</Link>
      </div>
      <div className=' w-1/2 flex-none justify-evenly '>
        
        <Link href='/year1970' className='btn btn-square btn-ghost text-xl'>
          1970
        </Link>
        <Link href='/year1980' className='btn btn-square btn-ghost text-xl'>
          1980
        </Link>
        <Link href='/year1990' className='btn btn-square btn-ghost text-xl'>
          1990
        </Link>
        <Link href='/jazz' className='btn btn-square btn-ghost text-xl'>
          Jazz
        </Link>
      </div>
    </div>
  )
}

export default Navbar
