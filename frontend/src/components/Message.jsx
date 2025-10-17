import { useSelector } from "react-redux"
import { selectMessage } from "../store/clipSelectors"

export const Message = () => {
  const message = useSelector(selectMessage)

  return <p>{message}</p>
}
