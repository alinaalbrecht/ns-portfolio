const Project = (props) => {
  return (
    <a
      className="project-tile"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      <h4 className="project-tile__name">{props.name}</h4>
      <p className="project-tile__description">{props.description}</p>
    </a>
  );
};

export default Project;
