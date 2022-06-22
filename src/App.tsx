import "./App.css";
import { fetcher } from "./fetcher";

function App() {
  const onClick = async () => {
    const updateuser = await fetcher
      .path("/users/{id}")
      .method("patch")
      .create()({
      id: "12",
      name: "ok",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
