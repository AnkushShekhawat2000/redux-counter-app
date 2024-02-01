import { CLICKED_SONG } from "./actionTypes"

export const clickedSong = (song) =>{

    return {
        type: CLICKED_SONG,
        payload: song
    }
}