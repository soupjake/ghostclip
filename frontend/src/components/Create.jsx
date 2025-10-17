import { useCallback } from "react"
import { createClip } from "../service"

export const Create = ({ id, setMessage }) => {
  const onClick = useCallback(async () => {
    setMessage("Creating...")

    const created = await createClip(id)

    if (created) {
      setMessage("Created!")
    } else {
      setMessage("Failed to create!")
    }
  }, [id, setMessage])

  return <i onClick={onClick}>✔️</i>
}
