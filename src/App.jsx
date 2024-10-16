import {Outlet} from "react-router-dom"
import {Header, Footer } from "./components"
function App() {

  return (
    <div className="bg-background">
      <Header />
      <main className="">
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
