import { useCallback, useMemo } from "react"
import { useDispatch } from "react-redux"
import { createClip, deleteClip } from "../store/clipThunks"

export const Action = ({ isDelete = false }) => {
  const dispatch = useDispatch()

  const onClick = useCallback(() => {
    if (isDelete) {
      dispatch(deleteClip())
    } else {
      dispatch(createClip())
    }
  }, [dispatch, isDelete])

  const icon = useMemo(() => (isDelete ? "✖️" : "✔️"), [isDelete])

  return <i onClick={onClick}>{icon}</i>
}
