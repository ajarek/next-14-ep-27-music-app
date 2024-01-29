import Link from 'next/link'
import React from 'react'

const MobileMenu = () => {
  return (
    <div className=' w-1/2 absolute right-0 top-0 flex flex-col justify-evenly sm:hidden bg-secondary '>
        
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
  )
}

export default MobileMenu