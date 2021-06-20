const ProjectSection = (props) => {
  return (
    <div className="project-section">
      <h3 className="project-section__heading">{props.heading}</h3>
      <p className="project-section__description">{props.description}</p>
    </div>
  );
};

export default ProjectSection;
