import Cards from "./components/cards";
import { Routes, Route } from "react-router-dom";
import data from "./data"
import { Details } from "./components/details";
export default function App() {

  return (
    <main className="p-5 h-screen">
      <Routes>
        {data.map((item) => (
          <Route
            key={item.id}
            path={`/${item.name}`}
            element={<Details data={item}/>}
          />
        ))}
        <Route path="/" element={<Cards data={data} />} />
      </Routes>
    </main>
  );
}
