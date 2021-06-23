const ToolsSection = (props) => {
  return (
    <div className="tools-section">
      <h3 className="tools-section__heading">{props.heading}</h3>
      <div className="tools-section__logo-grid">
        {props.tools.map((tool) => (
          <div className="logo-grid__logo">
            <img src={tool} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
