import {getData} from '@/api/getData'
import ListMusic from '@/components/ListMusic'

const url_80='https://api.deezer.com/playlist/7141658344'


export default async function year1980() {
  const { tracks, title } = await getData(`${url_80}`)

  return (
    <>
    <h1 className='text-2xl text-center text-secondary font-bold mt-4'>{title}</h1>
    <main >
      
      <ListMusic tracks={tracks.data}/>
    </main>
    </>
  )
}