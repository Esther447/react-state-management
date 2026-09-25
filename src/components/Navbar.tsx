import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./Navbar.module.css";

function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={styles.navbar}>
            <span className={styles.brand}>React App</span>

            <button className={styles.themeToggle} onClick={toggleTheme}>
              switch  {theme === LIGHT_THEME ? "Switch to Dark" : "Switch to Light"}
            </button>
        </nav>
    );
}

export default Navbar;