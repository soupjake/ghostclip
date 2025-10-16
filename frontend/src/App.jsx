import { useMemo } from "react";
import { v4 } from "uuid";
import "./App.css";
import Copy from "./components/Copy";

function App() {
  const path = useMemo(() => {
    let pathName = window.location.pathname.substring(1);

    if (!pathName) {
      const uuid = v4();
      pathName = uuid;
      window.location.pathname = uuid;
    }

    return pathName;
  }, []);

  return (
    <>
      <h2 className="logo">👻</h2>
      <h2>{path}</h2>
      <Copy />
    </>
  );
}

export default App;
