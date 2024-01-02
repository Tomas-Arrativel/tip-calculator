import styles from './Form.module.css';

const Form = () => {
  return (
    <form>
      <div className={styles.input}>
        <label>Bill</label>
        <img src='./images/icon-dollar.svg' alt='Dollar icon' />
        <input type='text' placeholder='0' />
      </div>
    </form>
  );
};

export default Form;
