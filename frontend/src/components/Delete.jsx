import { useCallback, useMemo, useState } from "react"
import { deleteClips } from "../services/clipService"

function Delete({ uuid, selected, onDelete }) {
  const [loading, setLoading] = useState(false)
  const onClick = useCallback(async () => {
    setLoading(true)
    const deleted = await deleteClips(uuid)

    if (deleted) {
      onDelete()
    }

    setLoading(false)
  }, [uuid, onDelete])

  const buttonText = useMemo(() => {
    if (loading) {
      return "Loading"
    }

    return `Delete (${selected.length})`
  }, [loading, selected])

  if (!selected.length) {
    return null
  }

  return <button onClick={onClick}>{buttonText}</button>
}

export default Delete
