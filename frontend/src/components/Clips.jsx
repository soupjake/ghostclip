import { useCallback, useEffect, useState } from "react"
import { getClips } from "../services/clipService"
import Loading from "./Loading"
import Delete from "./Delete"
import ClipTexts from "./ClipTexts"

function Clips({ uuid }) {
  const [loading, setLoading] = useState(false)
  const [clips, setClips] = useState([])
  const [selected, setSelected] = useState([])

  useEffect(() => {
    async function fetchClips() {
      setLoading(true)

      const results = await getClips(uuid)
      setClips(results)

      setLoading(false)
    }

    if (uuid && !loading && !clips.length) {
      fetchClips()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uuid])

  const onDelete = useCallback(() => {
    setClips(clips.filter((_, index) => !selected.includes(index)))
    setSelected([])
  }, [clips, selected])

  if (!loading && !clips.length) {
    return null
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="clips">
      <ClipTexts clips={clips} selected={selected} setSelected={setSelected} />
      <Delete uuid={uuid} selected={selected} onDelete={onDelete} />
    </div>
  )
}

export default Clips
