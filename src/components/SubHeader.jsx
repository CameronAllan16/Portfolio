import "../assets/subheader.css";
import NavBar from "./NavBar";

function Subheader(props) {
  return (
    <header className="subheader">
      <h1 className="name">{props.name}</h1>
    </header>
  );
}

export default Subheader;
