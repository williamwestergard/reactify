import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./userMode";

const ThemeToggle = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      style={{
        position: "absolute",
        right: "30px",
        bottom: "30px",
        padding: "10px 20px",
        cursor: "pointer",
        background: darkMode ? "white" : "black",
        color: darkMode ? "black" : "white",
        border: "1px solid #ddd",
      }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
