import { useCallback } from "react"
import { deleteClip } from "../service"

export const Delete = ({ id, setMessage, setClip }) => {
  const onClick = useCallback(async () => {
    setMessage("Deleting...")

    const deleted = await deleteClip(id)

    if (deleted) {
      setClip("")
      setMessage("Deleted!")
    } else {
      setMessage("Failed to delete!")
    }
  }, [id, setMessage, setClip])

  return <i onClick={onClick}>✖️</i>
}
