import styles from './Form.module.css';

const Form = () => {
  return (
    <form>
      <div className={styles.input}>
        <label>Bill</label>
        <img src='./images/icon-dollar.svg' alt='Dollar icon' />
        <input type='text' placeholder='0' />
      </div>

      <div className={styles.tip}>
        <label>Select Tip %</label>
        <div className={styles.tip__button}>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
        </div>
        <div className={styles.tip__button}>
          <button>25%</button>
          <button>50%</button>
          <input type='text' placeholder='Custom' />
        </div>
      </div>

      <div className={styles.input}>
        <label>Number of people</label>
        <img src='./images/icon-person.svg' alt='Person icon' />
        <input type='text' placeholder='0' />
      </div>
    </form>
  );
};

export default Form;
