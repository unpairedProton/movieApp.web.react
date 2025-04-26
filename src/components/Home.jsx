import React from 'react'
import MovieContent from './MovieContent'
import SideNav from './SideNav'

const Home = () => {
  document.title = 'SCSDB | Homepage'
  return (
    <div className=' home w-full h-full flex' >
      <SideNav />
      <MovieContent />
    </div>
  )
}

export default Home