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
  const { track, image, artist, title } = searchParams;

  if (track) {
    return (
      <div className='min-h-[calc(100vh-80px)] flex flex-col justify-start items-center gap-4 mt-4'>
        <h1 className='text-secondary font-bold'>{artist}</h1>
        <p className='text-secondary '>{title}</p>
        <div className='w-[300px] h-[300px] rounded-full overflow-hidden motion-safe:animate-spin'>
          <Image
            src={image}
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
    );
  } else {
    return <NotFound />;
  }
}

export default Page
