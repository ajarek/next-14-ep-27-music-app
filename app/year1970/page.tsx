import {getData} from '@/api/getData'
import ListMusic from '@/components/ListMusic'

const url_70='https://api.deezer.com/playlist/1405240385'



export default async function Year1970() {
  const { tracks, title } = await getData(`${url_70}`)

  return (
    <>
    <h1 className='text-2xl text-center text-secondary font-bold mt-4'>{title}</h1>
    <main >
      
      <ListMusic tracks={tracks.data}/>
    </main>
    </>
  )
}