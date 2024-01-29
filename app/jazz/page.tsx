import {getData} from '@/api/getData'
import ListMusic from '@/components/ListMusic'

const url_jazz='https://api.deezer.com/playlist/1615514485'


export default async function Jazz() {
  const { tracks, title } = await getData(`${url_jazz}`)

  return (
    <>
    <h1 className='text-2xl text-center text-secondary font-bold mt-4'>{title}</h1>
    <main >
      
      <ListMusic tracks={tracks.data}/>
    </main>
    </>
  )
}