'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const dataTheme = document.querySelector('html') as HTMLHtmlElement
      if (isDark) {
        dataTheme.dataset.theme = 'dark'
      } else {
        dataTheme.dataset.theme = 'light'
      }
    }
  }, [isDark])
  return (
    <div className='navbar bg-secondary text-white relative'>
      <div className='flex-none sm:hidden '>
        <button
          className='btn btn-square btn-ghost'
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19 5L5 19M5 5L19 19'
                stroke='white'
                stroke-width='1.8'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>
      <div className='flex-1'>
        <Link
          href={'/'}
          className='btn btn-ghost text-xl'
        >
          Best Music Ever
        </Link>
      </div>
      <div className=' w-1/2 flex-none justify-evenly max-sm:hidden '>
        <Link
          href='/year1970'
          className='btn btn-square btn-ghost text-xl'
        >
          1970
        </Link>
        <Link
          href='/year1980'
          className='btn btn-square btn-ghost text-xl'
        >
          1980
        </Link>
        <Link
          href='/year1990'
          className='btn btn-square btn-ghost text-xl'
        >
          1990
        </Link>
        <Link
          href='/jazz'
          className='btn btn-square btn-ghost text-xl'
        >
          Jazz
        </Link>
      </div>
      <label className='flex cursor-pointer gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle
            cx='12'
            cy='12'
            r='5'
          />
          <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
        </svg>
        <input
          type='checkbox'
          value='synthwave'
          className='toggle theme-controller'
          onChange={() => setIsDark(!isDark)}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
        </svg>
      </label>
      {open && <MobileMenu />}
    </div>
  )
}

export default Navbar
