import React from "react"
import { UseSelector, useSelector } from "react-redux"

const SongDisplay =() =>{

    const songDetails = useSelector(state => state.song)
    console.log({songDetails})

    return (
        <div>
           <h1>Song Display</h1>
           {
            songDetails && 
            <div>
                <p>{songDetails.name}</p>
                <p>{songDetails.album}</p>
                <p>{songDetails.artist}</p>
                <p>{songDetails.duration}</p>
            </div>
           }
       </div>
    )
   
}

export default SongDisplay