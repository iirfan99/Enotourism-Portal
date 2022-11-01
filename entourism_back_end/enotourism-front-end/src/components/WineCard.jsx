

import styles from "./WineCard.css";

const WineCard = () => {
  return (
    <div className={styles.container}>
     

      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default WineCard;