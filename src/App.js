import React from "react"
import CounterApp from "./Component/CounterApp"
import SongList from "./Component/SongList"
import SongDisplay from "./Component/SongDisplay"
const App = () =>{
  return (

    <div>
      <CounterApp/>
      <div  style={{
        display:"flex",
        justifyContent:"space-around"
        }}>
        <SongList/>
        <SongDisplay/>
      </div>
     
    </div>
  )
}

export default App;
