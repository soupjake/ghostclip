import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createClip } from "../services/clipService"
import { selectId } from "../store/clipSelectors"
import { setClip, setMessage } from "../store/clipSlice"

export const Create = () => {
  const dispatch = useDispatch()
  const id = useSelector(selectId)

  const onClick = useCallback(async () => {
    dispatch(setMessage("Creating..."))

    const created = await createClip(id)

    if (created) {
      dispatch(setClip(""))
      dispatch(setMessage("Created!"))
    } else {
      dispatch(setMessage("Failed to create!"))
    }
  }, [id, dispatch])

  return <i onClick={onClick}>✔️</i>
}
