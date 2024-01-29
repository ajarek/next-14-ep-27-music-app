

import {getData} from '@/api/getData'
import ListMusic from '@/components/ListMusic'
const url_60='https://api.deezer.com/playlist/908622995'
const url_70='https://api.deezer.com/playlist/1405240385'
const url_80='https://api.deezer.com/playlist/7141658344'
const url_90='https://api.deezer.com/playlist/8027597282'
const url_jazz='https://api.deezer.com/playlist/1615514485'


export default async function Home() {
  const { tracks, title } = await getData(`${url_60}`)

  return (
    <>
    <h1 className='text-2xl text-center text-secondary font-bold mt-4'>{title}</h1>
    <main >
      
      <ListMusic tracks={tracks.data}/>
    </main>
    </>
  )
}
