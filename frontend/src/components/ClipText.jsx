import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectClip } from "../store/clipSelectors"
import { setClip } from "../store/clipSlice"

export const ClipText = () => {
  const dispatch = useDispatch()
  const clip = useSelector(selectClip)

  const onChange = useCallback(
    (event) => {
      dispatch(setClip(event.target.value))
    },
    [dispatch],
  )

  return (
    <textarea
      className="clip-text"
      rows={20}
      maxLength={500}
      value={clip}
      onChange={onChange}
    />
  )
}
