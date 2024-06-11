import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Dropdown } from "./Components/Dropdown";
import {Header} from "./Components/Header"

const Inkers = [
  {
    name: "persona1",
    link: "#persona1",
  },

  {
    name: "persona2",
    link: "#persona2",
  },

  {
    name: "persona3",
    link: "#persona3",
  },

  {
    name: "persona4",
    link: "#persona4",
  },

  {
    name: "persona5",
    link: "#persona5",
  },
];



function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
