import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main main-home">
      <div className="home">
        <h1>I'm REINIER</h1>
        <h2>Web-Development Student in DCI</h2>
         <div className="boton boton-start">
          <Link className="nav--link" to="/projects">
            <strong>See more</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
