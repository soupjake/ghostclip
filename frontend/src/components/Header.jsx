import { useSelector } from "react-redux"
import { selectId } from "../store/clipSelectors"

export const Header = () => {
  const id = useSelector(selectId)

  return (
    <>
      <h2 className="logo">👻</h2>
      <h2 className="path">{id}</h2>
    </>
  )
}
