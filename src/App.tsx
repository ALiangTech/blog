import setupRouter from './routers'
import Introduce from './pages/introduce/introduce'
import './App.css'
function App() {
  return (
    <div className="App grid h-screen w-screen">
      <div>{Introduce()}</div>
      <div>{setupRouter()}</div>
    </div>
  )
}

export default App
