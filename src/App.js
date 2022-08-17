import "./App.css";
import List from "./pages/List";
import Create from "./pages/Create";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(Error);
      });
  }, []);

  const handleCreate = () => {
    setMode(!mode);
  };

  return (
    <div className="main">
      <header>게시판</header>
      <div className="main--container">
        <List data={data} />
        <button onClick={handleCreate}>글쓰기</button>
        {mode ? <Create /> : null}
      </div>
    </div>
  );
}

export default App;
