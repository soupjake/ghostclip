import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectClip } from "../store/clipSelectors"
import { setMessage } from "../store/clipSlice"

export const Copy = () => {
  const dispatch = useDispatch()
  const clip = useSelector(selectClip)

  const onClick = useCallback(() => {
    try {
      navigator.clipboard.writeText(clip)
      dispatch(setMessage("Copied!"))
    } catch {
      dispatch(setMessage("Failed to copy!"))
    }
  }, [dispatch, clip])

  return <i onClick={onClick}>📋</i>
}
