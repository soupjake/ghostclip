import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  id: "",
  loading: true,
  clip: "",
  message: "",
}

export const clipSlice = createSlice({
  name: "clip",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setClip: (state, action) => {
      state.clip = action.payload
    },
    setMessage: (state, action) => {
      state.message = action.payload
    },
  },
})

export const { setId, setLoading, setIsNew, setClip, setMessage } =
  clipSlice.actions

export default clipSlice.reducer
