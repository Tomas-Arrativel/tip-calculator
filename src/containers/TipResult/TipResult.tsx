import styles from './TipResult.module.css';

const TipResult = () => {
  return (
    <section className={styles.container}>
      <div className={styles.tips}>
        <div className={styles.textCont}>
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <p className={styles.tipNumbers}>$0.00</p>
      </div>

      <div className={styles.tips}>
        <div className={styles.textCont}>
          <p>Total</p>
          <span>/ person</span>
        </div>
        <p className={styles.tipNumbers}>$0.00</p>
      </div>
    </section>
  );
};

export default TipResult;
