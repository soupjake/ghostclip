import { useSelector } from "react-redux"
import { selectLoading, selectClip } from "../store/clipSelectors"
import { Refresh } from "./Refresh"
import { Create } from "./Create"
import { Copy } from "./Copy"
import { Delete } from "./Delete"
import { Message } from "./Message"

export const Clip = () => {
  const loading = useSelector(selectLoading)
  const clip = useSelector(selectClip)

  if (loading) {
    return <i>⌛</i>
  }

  if (!loading && !clip) {
    return <Refresh />
  }

  return (
    <div className="clip">
      <ClipText />
      <Message />
      <div className="actions">
        <Create />
        <Copy />
        <Delete />
      </div>
    </div>
  )
}
