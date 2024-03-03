import css from "../MainButton/MainButton.module.css";

const SendButton = ({ click, text }) => {
    return (
        <button className={css.button} onClick={click} type="submit">            
            {text}
        </button>
    )
}

export default SendButton;