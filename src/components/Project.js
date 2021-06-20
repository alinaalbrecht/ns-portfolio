const Project = (props) => {
  return (
    <div className="project-tile">
      <h4 className="project-tile__name">{props.name}</h4>
      <p className="project-tile__description">{props.description}</p>
    </div>
  );
};

export default Project;
