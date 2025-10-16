import { useCallback } from "react"

function ClipTexts({ clips, selected, setSelected }) {
  const onSelect = useCallback(
    (index) => () => {
      if (selected.includes(index)) {
        setSelected(selected.filter((value) => value !== index))
      } else {
        setSelected(selected.concat([index]))
      }
    },
    [selected, setSelected],
  )

  return (
    <>
      {clips.map((clip, index) => (
        <div className="clip-text" key={clip} onClick={onSelect(index)}>
          {selected.includes(index) ? "✓" : "•"}
          <p>{clip}</p>
        </div>
      ))}
    </>
  )
}

export default ClipTexts
