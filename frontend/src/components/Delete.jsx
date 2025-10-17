import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteClip } from "../services/clipService"
import { selectId } from "../store/clipSelectors"
import { setClip, setMessage } from "../store/clipSlice"

export const Delete = () => {
  const dispatch = useDispatch()
  const id = useSelector(selectId)

  const onClick = useCallback(async () => {
    dispatch(setMessage("Deleting..."))

    const deleted = await deleteClip(id)

    if (deleted) {
      dispatch(setClip(""))
      dispatch(setMessage("Deleted!"))
    } else {
      dispatch(setMessage("Failed to delete!"))
    }
  }, [id, dispatch])

  return <i onClick={onClick}>✖️</i>
}
