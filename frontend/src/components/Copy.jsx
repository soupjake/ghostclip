import { useCallback } from "react"

export const Copy = ({ id, setMessage }) => {
  const onClick = useCallback(() => {
    try {
      navigator.clipboard.writeText(id)
      setMessage("Copied!")
    } catch {
      setMessage("Failed to copy!")
    }
  }, [id, setMessage])

  return <i onClick={onClick}>📋</i>
}
