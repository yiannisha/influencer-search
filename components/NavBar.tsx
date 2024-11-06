import React from 'react'
import Image from 'next/image'
import Search, { SearchProps } from './Search'

export default function NavBar(props: SearchProps) {
  return (
    <div className={`w-full h-fit-content fixed top-5 px-20 flex flex-row justify-center items-center rounded ${props.className}`}>
      <div className="w-1/4 flex flex-row justify-start items-center">
        <Image 
          src="https://imagedelivery.net/6SRmze-FT2n2PI_eCsJRmg/4dabda22-5f7f-4cbe-78c8-be00d384be00/landingPage"
          alt="Uplodio Logo"
          width={150}
          height={150}
        />
      </div>

      {/* SEARCH */}
      <div className="w-3/4 flex flex-row justify-start items-start">
        <Search className="w-2/3" search={props.search} setSearch={props.setSearch} />
      </div>
        
    </div>
  )
}
