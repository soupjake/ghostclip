import { useCallback } from "react";

function Copy({ path }) {
  const onClick = useCallback(() => {
    try {
      navigator.clipboard.writeText(path);
      alert("Copied!");
    } catch {
      alert("Failed to copy!");
    }
  }, [path]);

  return (
    <span className="copy" onClick={onClick}>
      📋
    </span>
  );
}

export default Copy;
