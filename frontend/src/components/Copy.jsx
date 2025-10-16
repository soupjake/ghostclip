import { useCallback } from "react"

function Copy() {
    const onClick = useCallback(() => 
        navigator.clipboard.writeText(window.location)
    , [])

    return (
        <button onClick={onClick}>Copy</button>
    )
}

export default Copy