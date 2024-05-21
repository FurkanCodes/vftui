import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Button, Rating } from "../lib/main";
import "./App.css";
import { Title } from "../lib/components/Title";
import { Card } from "../lib/components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button variant="primary" size="large" label="hey"></Button>
      <Title
        size="small"
        title={"asf"}
        className=" bg-black text-white p-4 flex justify-center"
      ></Title>
      <Card header="My Custom asf" className="text-2xl md:text-lg">
        <p>This is some content inside the card.</p>
        <p>This is some content inside the card.</p>
        <p>This is some content inside the card.</p>
        <p>This is some content inside the card.</p>
        <p>This is some content inside the card.</p>
        <p>This is some content inside the card.</p>
        <p>This is some content inside the card.</p>
      </Card>
      <Rating
        count={2}
        onChange={(value) => console.log(value)}
        theme={"primary"}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
