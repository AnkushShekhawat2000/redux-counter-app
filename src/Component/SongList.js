import React from "react"

import songsData from "../data/songData"
import { clickedSong } from "../redux/actions/songActions"
import { UseDispatch, useDispatch } from "react-redux"

const SongList = () =>{

    const dispatch = useDispatch();
    
    return (
        <div>
        {
                      
            songsData.map((song) =>(
              <p onClick={()=>dispatch(clickedSong(song))} key={song.id}>
                    {song.name}
               
              </p>
            )
        )

        
        }
        </div>
    )
}

export default SongList