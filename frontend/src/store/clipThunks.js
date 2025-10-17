import { v4 } from "uuid"
import { setClip, setLoading, setId } from "./clipSlice"
import { getClip } from "../services/clipService"
import { selectId } from "./clipSelectors"

export const fetchClip = () => async (dispatch, getState) => {
  const stateId = selectId(getState())

  if (!stateId) {
    let id = window.location.pathname.substring(1)

    if (!id) {
      id = v4()
      window.location.pathname = id
    } else {
      dispatch(setClip(await getClip(id)))
    }

    dispatch(setLoading(false))
    dispatch(setId(id))
  }
}
