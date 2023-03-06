import setupRouter from './routers'
import Introduce from './pages/introduce/introduce'

function App() {
  return (
    <div className="App grid h-screen w-screen">
      <div className=''>{Introduce()}</div>
       {setupRouter()}
    </div>
  )
}

export default App
