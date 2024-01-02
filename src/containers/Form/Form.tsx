import styles from './Form.module.css';

const Form = () => {
  return (
    <form>
      <div className={styles.input}>
        <label>Bill</label>
        <img src='./images/icon-dollar.svg' alt='Dollar icon' />
        <input type='text' placeholder='0' />
      </div>
      <div>
        <label>Select Tip %</label>
        <div>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <input type='text' placeholder='Custom' />
        </div>
      </div>
    </form>
  );
};

export default Form;
