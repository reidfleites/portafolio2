import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="main main-pro">
      <div>
        <p>
          I'm learning web-design and web-devolopment. Here are some of
          my recent proyects...
        </p>
      </div>
      <div className="projects">
        <div className="pro row1">
          <div className="row-tablet">
            <div className="proy flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="rojo"></div>
                </div>
                <div className="flip-card-back">
                  <h3>Onlineshop</h3>
                  <h3>Interactive app in React</h3>
                  <a href="https://meinersteonlineshop.netlify.app/" target="_blank">Showonline</a>
                </div>
              </div>
            </div>
            <div className="proy flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front foto2">
                  <div className="rojo"></div>
                </div>
                <div className="flip-card-back">
                  <h3>Songdatabase</h3>
                  <h3>Interactive app in React</h3>
                  <a href="#">Showonline</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row-tablet">
          <div className="proy flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front foto3">
                  <div className="rojo"></div>
                </div>
                <div className="flip-card-back">
                  <h3>Cuba-hostals</h3>
                  <h3>Interactive app in React</h3>
                  <a href="#">in process</a>
                </div>
              </div>
            </div>
            <div className="proy flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front inprocess">
                  <div className="rojo"></div>
                </div>
                <div className="flip-card-back">
                  <h3>Onlineshop</h3>
                  <h3>Interactive app in React</h3>
                  <a href="#">inprocess...</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pro row2">
          <div className="row-tablet">
          <div className="proy flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front inprocess">
                  <div className="rojo"></div>
                </div>
                <div className="flip-card-back">
                  <h3>Onlineshop</h3>
                  <h3>Interactive app in React</h3>
                  <a href="#">inprocess...</a>
                </div>
              </div>
            </div>
            <div className="proy flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front inprocess">
                  <div className="rojo"></div>
                </div>
                <div className="flip-card-back">
                  <h3>Onlineshop</h3>
                  <h3>Interactive app in React</h3>
                  <a href="#">inprocess...</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row-tablet">
          <div className="proy flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front inprocess">
                  <div className="rojo"></div>
                </div>
                <div className="flip-card-back">
                  <h3>Onlineshop</h3>
                  <h3>Interactive app in React</h3>
                  <a href="#">inprocess...</a>
                </div>
              </div>
            </div>
            <div className="proy flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front inprocess">
                  <div className="rojo"></div>
                </div>
                <div className="flip-card-back">
                  <h3>Onlineshop</h3>
                  <h3>Interactive app in React</h3>
                  <a href="#">inprocess...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>
        Interested in collaborating or investing? I’m always open to discussing
        product design work or partnership opportunities.
      </p>
      <div className="boton">
        <Link className="nav--link" to="/contacts">
          <strong>Start conversation</strong>
        </Link>
      </div>
    </div>
  );
}
export default Projects;
