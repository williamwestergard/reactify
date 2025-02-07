import { useSelector } from "react-redux";

function About() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <h1> Om mig</h1>
      <p
        style={{
          color: darkMode ? "#ffffff" : "rgb(71, 71, 71)",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        Jag är en studerande Frontend utvecklare från Norrtälje.
        <br />
        Tyvärr har jag inga tidigare erfarenheter av att jobba inom yrket.
        <br />
        Men kod har alltid fascinerat mig. Varje dag lär jag mig mer.
        <br /> <br />
        <span style={{ fontWeight: 700 }}>Mina färdigheter:</span>
        <br />
        HTML, CSS, Javascript, Tailwind och SASS
      </p>
    </>
  );
}

export default About;
