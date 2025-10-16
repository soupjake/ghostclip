import { useCallback } from "react";

function Copy({ uuid }) {
  const onClick = useCallback(() => {
    try {
      navigator.clipboard.writeText(uuid);
      alert("Copied!");
    } catch {
      alert("Failed to copy!");
    }
  }, [uuid]);

  return (
    <button className="copy" onClick={onClick}>
      Copy
    </button>
  );
}

export default Copy;
