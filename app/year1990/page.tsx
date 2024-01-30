import { getData } from '@/api/getData'
import ListMusic from '@/components/ListMusic'

const url_90 = 'https://api.deezer.com/playlist/8027597282'

export default async function Year1990() {
  const { tracks, title } = await getData(`${url_90}`)

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
