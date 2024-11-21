import React from "react"
import Sidebar from "./Components/Sidebar"
import Tailwind from "./Components/Tailwind"
import Player from "./Components/Player"
import Display from "./Components/Display"
function App() {


  return (
  <div className="h-screen bg-black">
<div className="h-[90%] flex">
<Sidebar/>
<Display/>
</div>
<Player/>
  </div>
  )
}

export default App
