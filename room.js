import {useState} from "react"

export default function Room(){

const [room,setRoom] = useState("")

function joinRoom(){

alert("Joined Room: "+room)

}

return(

<div className="room-section">

<input
placeholder="Enter Room ID"
value={room}
onChange={(e)=>setRoom(e.target.value)}
/>

<button onClick={joinRoom}>
Join Room
</button>

</div>

)

}