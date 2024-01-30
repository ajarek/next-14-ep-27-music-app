import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NotFound from '../not-found'

interface Props {
  searchParams: {
    track: string
    image: string
    artist: string
    title: string
  }
}

const Page = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams)
  const track = params.get('track')
  const img = params.get('image')
  const artist = params.get('artist')
  const title = params.get('title')
  if (track) {
    return (
      <div className='min-h-[calc(100vh-80px)] flex flex-col justify-start items-center gap-4 mt-4'>
        <h1 className='text-secondary font-bold'>{artist}</h1>
        <p className='text-secondary '>{title}</p>
        <div className='w-[300px] h-[300px] rounded-full overflow-hidden motion-safe:animate-spin'>
          <Image
            src={img}
            alt='album cover'
            width={300}
            height={300}
          />
        </div>
        <audio
          controls
          autoPlay
          src={track}
          loop
          className='audio'
        ></audio>
        <p>
          Go back to the{' '}
          <Link
            className='link link-accent text-xl'
            href='/'
          >
            Home
          </Link>
        </p>
      </div>
    )
  }else{
    return   NotFound()
  }

 
}

export default Page
