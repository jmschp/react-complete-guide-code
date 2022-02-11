import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles["header"]}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
    </>
  );
};
export default Header;
