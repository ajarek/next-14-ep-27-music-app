import Image from "next/image"


async function getData() {
  const res = await fetch('https://api.deezer.com/playlist/908622995')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const { tracks } = await getData()
  console.log(tracks.data[0].artist.name)

  return (
    <main className='w-full flex min-h-screen  flex-wrap  items-center justify-center p-24 gap-4'>
      {tracks.data.map((track: any) => (
        <div key={track.id} className="w-[200px] h-[250px] shadow-lg p-2">
          <Image
             src={track.album.cover}
             alt="album cover"
             width={160}
             height={160}
          />
          <div>
            {track.artist.name}
            </div>
          <div>
            {track.title}
            </div>

        </div>
      ))}
    </main>
  )
}
