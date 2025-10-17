import { useMemo, useState } from "react"
import { v4 } from "uuid"
import { Clip } from "./components/Clip"
import "./App.css"

export const App = () => {
  const [isNew, setIsNew] = useState(true)
  const id = useMemo(() => {
    let pathName = window.location.pathname.substring(1)

    if (!pathName) {
      const newUuid = v4()
      pathName = newUuid
      window.location.pathname = newUuid
    } else {
      setIsNew(false)
    }

    return pathName
  }, [])

  return (
    <>
      <h2 className="logo">👻</h2>
      <h2 className="path">{id}</h2>
      <Clip id={id} isNew={isNew} />
    </>
  )
}
