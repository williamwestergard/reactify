import { useSelector } from "react-redux";

function Contact() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <h1> Kontakt</h1>
      <p
        style={{
          color: darkMode ? "#ffffff" : "rgb(71, 71, 71)",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        Kontakta mig på:
      </p>
      <br />
      <a href="https://github.com/williamwestergard" target="_blank">
        <button
          style={{
            background: darkMode ? "white" : "black",
            color: darkMode ? "black" : "rgb(255, 255, 255)",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          Github
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/william-westerg%C3%A5rd-5068b620a/"
        target="_blank"
      >
        <button
          style={{
            background: darkMode ? "white" : "black",
            color: darkMode ? "black" : "rgb(255, 255, 255)",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          LinkedIn
        </button>
      </a>
    </>
  );
}

export default Contact;
