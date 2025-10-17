import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectId } from "../store/clipSelectors"
import { setMessage } from "../store/clipSlice"

export const Copy = () => {
  const dispatch = useDispatch()
  const id = useSelector(selectId)

  const onClick = useCallback(() => {
    try {
      navigator.clipboard.writeText(id)
      dispatch(setMessage("Copied!"))
    } catch {
      dispatch(setMessage("Failed to copy!"))
    }
  }, [id, dispatch])

  return <i onClick={onClick}>📋</i>
}
