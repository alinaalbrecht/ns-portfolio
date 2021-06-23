import Project from "./Project";
import Slider from "react-slick";

var React = require("react");
/* var Slider = require("react-slick"); */

class ProjectSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const projects = this.props.projects.map((project) => {
      return (
        <Project
          name={project.name}
          description={project.description}
          url={project.url}
        />
      );
    });

    const settings = {
      dots: true,
      infinite: false,
      autoplay: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="project-section">
        <h3 className="project-section__heading">{this.props.heading}</h3>
        <p className="project-section__description">{this.props.description}</p>
        <Slider {...settings}>{projects}</Slider>
      </div>
    );
  }
}

export default ProjectSection;
