import React from 'react'
import TopNav from './TopNav'
import Hero from './Hero'
import HorizontalCards from './HorizontalCards'

const MovieContent = () => {
  return (
    <div  className=' w-full flex flex-col overflow-y-scroll ' >  
        <TopNav />
        <Hero></Hero>
        <HorizontalCards/>
    </div>
  )
}
export default MovieContent
