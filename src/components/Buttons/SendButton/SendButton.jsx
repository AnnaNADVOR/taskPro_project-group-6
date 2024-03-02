import css from "../MainButton/MainButton.module.css";

const MainButton = ({ click }) => {
    return (
        <button className={css.button} onClick={click} type="submit">            
            Send
        </button>
    )
}

export default MainButton;