import { Suspense } from "react";
import "./App.css";
import Bottles from "./Bottles/Bottles";

function App() {
  const bottleData = fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json"
  ).then((res) => res.json());

  return (
    <>
      <h1>Welcome to React</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Bottles bottleData={bottleData}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
