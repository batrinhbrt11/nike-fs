import React, {ComponentType} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

type Pages = Record<string, { default: ComponentType<any> }>;
const pages: Pages =
  import.meta.glob("./pages/*.tsx", { eager: true });

const routes = Object.keys(pages).map((path: string | null) => {
  const nameMatch = path ? path.match(/\.\/pages\/(.*)\.tsx$/) : null;
  const name = nameMatch ? nameMatch[1] : "";
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: path ? pages[path].default : null,
  };
});

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          {routes.map(({ path, component: RouteComp }) => {
            return (
              <Route key={path} path={path} element={RouteComp ? <RouteComp /> : null}></Route>
            );
          })}
        </Routes>
      </main>
    </>
  );
}

export default App;
