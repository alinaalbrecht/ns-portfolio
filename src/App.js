import Background from "./components/Background";
import Hero from "./components/Hero";
/* import ProjectSection from */
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
/* import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; */
import { FaChevronDown } from "react-icons/fa";
import "./css/App.scss";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Background />
      </div>

      <Hero icon={FaChevronDown} />
      <h2 className="App__heading"># Project I’ve Worked On</h2>
      <ProjectSection
        heading="Work Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
    </div>
  );
}

export default App;
