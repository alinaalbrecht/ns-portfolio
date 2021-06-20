import Background from "./components/Background";
import Hero from "./components/Hero";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
/* import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; */
import { FaChevronDown } from "react-icons/fa";
import "./css/App.scss";

function App() {
  return (
    <div>
      <Background />
      <Hero icon={FaChevronDown} />
    </div>
  );
}

export default App;
