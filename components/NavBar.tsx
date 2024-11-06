import React from 'react'
import Image from 'next/image'
import Search, { SearchProps } from './Search'

export default function NavBar(props: SearchProps) {
  return (
    <div className={`w-full h-fit-content fixed top-5 px-5 md:px-20 flex flex-row justify-end md:justify-center items-center rounded ${props.className}`}>
      <div className="absolute left-10 flex flex-row justify-start items-center">
        <Image 
          src="https://imagedelivery.net/6SRmze-FT2n2PI_eCsJRmg/4dabda22-5f7f-4cbe-78c8-be00d384be00/landingPage"
          alt="Uplodio Logo"
          width={100}
          height={100}
        />
      </div>

      {/* SEARCH */}
      <Search className="w-2/5 md:w-1/3" search={props.search} setSearch={props.setSearch} />
        
    </div>
  )
}
