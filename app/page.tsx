import Image from 'next/image'
import Link from 'next/link'
const url_60='https://api.deezer.com/playlist/908622995'
const url_70='https://api.deezer.com/playlist/1405240385'
const url_80='https://api.deezer.com/playlist/7141658344'
const url_90='https://api.deezer.com/playlist/8027597282'
const url_jazz='https://api.deezer.com/playlist/1615514485'
async function getData() {
  try {
    const res = await fetch(url_60)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    if (!data) {
      throw new Error('Empty response')
    }

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export default async function Home() {
  const { tracks, title } = await getData()

  return (
    <>
    <h1 className='text-2xl text-center text-secondary font-bold mt-4'>{title}</h1>
    <main className='w-full flex min-h-screen  flex-wrap  items-center justify-center px-24 py-8 gap-4'>
      
      {tracks.data.map((track: any) => (
        <>
        <Link  href={`/play?track=${track.preview}&image=${track.album.cover}&artist=${track.artist.name}&title=${track.title}`}>
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
          <div className='mt-2 text-secondary font-bold'>{track.artist.name}</div>
          <div className='text-secondary'>{track.title}</div>
        </div>
          </Link>
          </>
      ))}
    </main>
    </>
  )
}
