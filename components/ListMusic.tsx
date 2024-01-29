import Link from 'next/link'
import Image from 'next/image'
const ListMusic = ({ tracks }: { tracks: any[] }) => {
  return (
    <div className='w-full flex min-h-screen  flex-wrap  items-center justify-center px-24 py-8 gap-4'>
      {tracks.map((track: any) => (
        <>
          <Link
            href={`/play?track=${track.preview}&image=${track.album.cover}&artist=${track.artist.name}&title=${track.title}`}
          >
            <div
              key={track.id}
              className='w-[200px] h-[280px] shadow-xl p-2 border border-secondary rounded-lg '
            >
              <Image
                src={track.album.cover}
                alt='album cover'
                width={160}
                height={160}
              />
              <div className='mt-2 text-secondary font-bold'>
                {track.artist.name}
              </div>
              <div className='text-secondary'>{track.title}</div>
            </div>
          </Link>
        </>
      ))}
    </div>
  )
}


export default ListMusic