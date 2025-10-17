import { useEffect, useState } from "react"
import { getClip } from "../service"
import { Refresh } from "./Refresh"
import { Create } from "./Create"
import { Copy } from "./Copy"
import { Delete } from "./Delete"

export const Clip = ({ id, isNew }) => {
  const [loading, setLoading] = useState(false)
  const [clip, setClip] = useState("")
  const [message, setMessage] = useState(" ")

  useEffect(() => {
    console.log(id, isNew)
    async function fetchClips() {
      setLoading(true)
      setClip(await getClip(id))
      setLoading(false)
    }

    if (id && !isNew && !loading && !clip) {
      fetchClips()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isNew])

  if (loading) {
    return <i>⌛</i>
  }

  if (!loading && !clip) {
    return <Refresh />
  }

  return (
    <div className="clip">
      <textarea className="clip-text" rows={20} maxLength={500} value={clip} />
      <p>{message}</p>
      <div className="actions">
        <Create id={id} setMessage={setMessage} />
        <Copy id={id} setMessage={setMessage} />
        <Delete id={id} setMessage={setMessage} setClip={setClip} />
      </div>
    </div>
  )
}
