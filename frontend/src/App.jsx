import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchClip } from "./store/clipThunks"
import { Clip } from "./components/Clip"
import { Header } from "./components/Header"
import "./App.css"

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchClip())
  }, [dispatch])

  return (
    <>
      <Header />
      <Clip />
    </>
  )
}
