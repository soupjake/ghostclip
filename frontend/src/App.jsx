import { useMemo } from "react";
import { v4 } from "uuid";
import Copy from "./components/Copy";
import "./App.css";

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
      <h2 className="path">{path} <Copy path={path} /></h2>

    </>
  );
}

export default App;
