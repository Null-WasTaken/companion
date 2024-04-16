import SideBar from "./Component/SideBar/SideBar"
import Game from "./Component/Game/Game"

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-full h-100vh bg-main md:grid-cols-3">
      <SideBar />
      <Game />
    </div>
  )
}

export default App
