import Background from "./components/Background";
import Hero from "./components/Hero";
import "./css/App.scss";
import ProjectSection from "./components/ProjectSection";
import ToolsSection from "./components/ToolsSection";
import Footer from "./components/Footer";

const workProjects = [
  {
    name: "Twitter CSV Parser",
    description:
      "Converts the exported .csv data from twitter into an excel file, as the Tweet text included in the file breaks the format from a standard .csv file with newline breaks.",
    url: "https://github.com/gentlelentil/csv_converter",
  },
  /*   {
    name: "Abstract Parser",
    description: "lorem ipsum",
    url: "",
  }, */
];

const chemistryProjects = [
  {
    name: "B Matrix",
    description:
      "This Program accepts atoms via a Cartesian coordinate system, and calculates the B matrix from said coordinates.",
    url: "https://github.com/gentlelentil/wilson_gf_method",
  },
  {
    name: "create_start_file",
    description:
      "Written during my MSc. thesis, this script is designed to create a start.sh file commonly used in job schedulers (in this case slurm) for the purposes of using the gmx2qmmm program.",
    url: "https://github.com/gentlelentil/MSc_thesis/blob/master/createstartfile.py",
  },
  {
    name: "setup_calculations",
    description:
      "setup_calculations uses the create_start_file program entirely, alongside other functions designed to select a QM and MM region of atoms with a VMD script.",
    url: "https://github.com/gentlelentil/MSc_thesis/blob/master/setup_calculations.py",
  },
  {
    name: "check_charges",
    description:
      "This script will take a grofile and a topfile as arguments, check the atoms for identical chargegroups, then return the distances between the atoms in the same chargegroups.",
    url: "https://github.com/gentlelentil/MSc_thesis/blob/master/V2_check_charges.py",
  },
];

const languageTools = [
  "images/python.svg",
  "images/latex.svg",
  "images/bash.svg",
  "images/visual-basic.svg",
];

const pythonTools = [
  "images/jupyter.svg",
  "images/numpy.svg",
  "images/postgresql.svg",
  "images/scipy.svg",
];

function App() {
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Background />
      </div>
      <Hero />
      <h2 className="App__heading"># Projects I???ve Worked On</h2>
      <ProjectSection
        heading="Work Projects"
        description="The below projects are a collection of scripts that I wrote as part of my position as a working student. Generally these projects are optimisations to improve workflow where desired, instead of performing a task manually."
        projects={workProjects}
      />
      <ProjectSection
        heading="Chemistry Projects"
        description="These projects are scripts I wrote as part of my MSc in Chemistry at the Freie Universit??t. Scripts are improvements to streamline the creation of files for a QM/MM calculation using a GROMACS grofile obtained from a .pdb file, or mathematical calculations of some kind."
        projects={chemistryProjects}
      />
      <h2 className="App__heading"># Tools</h2>
      <ToolsSection heading="Languages" tools={languageTools} />
      <ToolsSection heading="Python Tools" tools={pythonTools} />
      <Footer />
    </div>
  );
}

export default App;
