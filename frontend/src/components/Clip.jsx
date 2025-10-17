import { useSelector } from "react-redux"
import { selectLoading } from "../store/clipSelectors"
import { ClipText } from "./ClipText"
import { Action } from "./Action"
import { Copy } from "./Copy"
import { Message } from "./Message"

export const Clip = () => {
  const loading = useSelector(selectLoading)

  if (loading) {
    return <i>⌛</i>
  }
  return (
    <div className="clip">
      <ClipText />
      <Message />
      <div className="actions">
        <Action />
        <Copy />
        <Action isDelete />
      </div>
    </div>
  )
}
