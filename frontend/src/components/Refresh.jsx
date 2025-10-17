import { useCallback } from "react"

export const Refresh = () => {
  const onClick = useCallback(async () => {
    window.location.pathname = ""
  }, [])

  return <i onClick={onClick}>🌀</i>
}
