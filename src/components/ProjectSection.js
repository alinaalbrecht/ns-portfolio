import Project from "./Project";

const ProjectSection = (props) => {
  return (
    <div className="project-section">
      <h3 className="project-section__heading">{props.heading}</h3>
      <p className="project-section__description">{props.description}</p>
      <div className="project-section__project-grid">
        <Project
          name="Twitter CSV Parser"
          description="Converts the exported .csv data from twitter into an excel file, as the Tweet text included in the file breaks the format from a standard .csv file with newline breaks."
        />
      </div>
    </div>
  );
};

export default ProjectSection;
