import { useMemo } from "react"
import { v4 } from "uuid"
import Copy from "./components/Copy"
import Clips from "./components/Clips"
import "./App.css"

function App() {
  const uuid = useMemo(() => {
    let pathName = window.location.pathname.substring(1)

    if (!pathName) {
      const newUuid = v4()
      pathName = newUuid
      window.location.pathname = newUuid
    }

    return pathName
  }, [])

  return (
    <>
      <h2 className="logo">👻</h2>
      <h2 className="path">
        {uuid} <Copy uuid={uuid} />
      </h2>
      <Clips uuid={uuid} />
    </>
  )
}

export default App
