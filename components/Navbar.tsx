'use client'
import Link from 'next/link'
import {useState} from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='navbar bg-secondary text-white relative'>
      <div className='flex-none sm:hidden '>
        <button className='btn btn-square btn-ghost' onClick={()=>setOpen(!open)} >
          { open?
            (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5L5 19M5 5L19 19" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
             ) :  

          (<svg
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
          )
          }
        </button>
      </div>
      <div  className='flex-1'>
        <Link href={'/'} className='btn btn-ghost text-xl'>Best Music Ever</Link>
      </div>
      <div className=' w-1/2 flex-none justify-evenly max-sm:hidden '>
        
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
      {open && <MobileMenu />}
      
    </div>
  )
}

export default Navbar
