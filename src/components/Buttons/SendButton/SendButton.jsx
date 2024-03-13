import css from '../MainAddButton/MainAddButton.module.css';

const SendButton = ({ click, text }) => {
  return (
    <button className={css.button} onClick={click} type="submit">
      {text}
    </button>
  );
};

export default SendButton;
