import { useSelector } from "react-redux";

function Portfolio() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <h1> Mina Projekt</h1>
      <p
        style={{
          color: darkMode ? "#ffffff" : "rgb(71, 71, 71)",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        Några hemsidor jag har gjort.
      </p>
      <br />
      <section style={{ lineHeight: 2 }}>
        <a
          href="https://williamwestergard.github.io/alien-beauty/"
          target="_blank"
        >
          <button className="button-white">Alien Beauty</button>
        </a>
        <a
          href="https://williamwestergard.github.io/happy-days/"
          target="_blank"
        >
          <button className="button-white">Happy Days</button>
        </a>
        <a
          href="https://williamwestergard.github.io/the-sheriff/"
          target="_blank"
        >
          <button className="button-white">The Sheriff</button>
        </a>
        <a
          href="https://williamwestergard.github.io/music-website-WIP/#"
          target="_blank"
        >
          <button className="button-white">Music Website </button>
        </a>
      </section>
    </>
  );
}

export default Portfolio;
