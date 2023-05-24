import styles from "./Logo.module.css";
import recipeHub from "./recipeHub.png";
export default function Logo() {
  return (
    <div className={styles.Logo}>
      <img src={recipeHub} />
      {/* <div>SEI</div>
      <div>CAFE</div> */}
    </div>
  );
}
