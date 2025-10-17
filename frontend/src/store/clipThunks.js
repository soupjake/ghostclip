import { v4 } from "uuid"
import { setClip, setLoading, setId, setMessage } from "./clipSlice"
import {
  getClipById,
  createClipById,
  deleteClipById,
} from "../services/clipService"
import { selectId, selectLoading, selectMessage } from "./clipSelectors"

export const fetchClip = () => async (dispatch, getState) => {
  const state = getState()
  const stateId = selectId(state)
  const loading = selectLoading(state)

  if (!stateId && !loading) {
    dispatch(setLoading(true))

    let id = window.location.pathname.substring(1)

    if (!id) {
      id = v4()
      window.history.replaceState({}, "ghostclip", id)
    } else {
      dispatch(setClip(await getClipById(id)))
    }

    dispatch(setLoading(false))
    dispatch(setId(id))
  }
}

const creatingMessage = "Creating..."

export const createClip = () => async (dispatch, getState) => {
  const state = getState()
  const message = selectMessage(state)

  if (message !== creatingMessage) {
    const id = selectId(state)

    dispatch(setMessage(creatingMessage))

    const created = await createClipById(id)

    if (created) {
      dispatch(setMessage("Created!"))
    } else {
      dispatch(setMessage("Failed to create!"))
    }
  }
}

const deletingMessage = "Deleting..."

export const deleteClip = () => async (dispatch, getState) => {
  const state = getState()
  const message = selectMessage(state)

  if (message !== deletingMessage) {
    const id = selectId(state)

    dispatch(setMessage(deletingMessage))

    const deleted = await deleteClipById(id)

    if (deleted) {
      dispatch(setMessage("Deleted!"))
      dispatch(setClip(""))
    } else {
      dispatch(setMessage("Failed to delete!"))
    }
  }
}
