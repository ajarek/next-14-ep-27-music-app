import { getData } from '@/api/getData'
import ListMusic from '@/components/ListMusic'
const url_60 = 'https://api.deezer.com/playlist/908622995'

export default async function Home() {
  const { tracks, title } = await getData(`${url_60}`)

  return (
    <>
      <h1 className='text-2xl text-center text-secondary font-bold mt-4'>
        {title}
      </h1>
      <main>
        <ListMusic tracks={tracks.data} />
      </main>
    </>
  )
}
