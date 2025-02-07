import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const CreatorName = (props) => {
    return <p>En hemsida skapad av {props.children}</p>;
  };

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <h1>
        Front-End <br />
        Portfolio
      </h1>
      <p
        style={{
          color: darkMode ? "#ffffff" : "rgb(71, 71, 71)",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        <CreatorName>William Westergård.</CreatorName>
      </p>
      <br />
      <Link to="/portfolio">
        <button
          style={{
            background: darkMode ? "none" : "black",
            border: darkMode ? "1px solid white" : "none",
            color: darkMode ? "white" : "rgb(255, 255, 255)",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          Mina Projekt
        </button>
      </Link>
    </>
  );
}

export default Home;
